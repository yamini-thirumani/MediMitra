import sounddevice as sd
import numpy as np
import scipy.io.wavfile as wav
import speech_recognition as sr
from googletrans import Translator
from twilio.rest import Client
import random
import requests
# Twilio SMS configuration 
TWILIO_ACCOUNT_SID = "ACff81be9537caf2eb95ee96084f8fd042"
TWILIO_AUTH_TOKEN = "3a2b60b32751e209115b466053512bf2"
TWILIO_WHATSAPP_NUMBER = "+19786073866"
YOUR_PHONE_NUMBER = "+918885604497" 
def get_dummy_user_info():
    dummy_users = [
        {
            "username": "Ravi Kumar",    
            "address": "House No. 12, Jangareddy Colony, Paloncha, Khammam, Telangana, 507219"
        },
        {
            "username": "Sita Rani",      
            "address": "Flat No. 5, Venkateshwara Apartments, Velpur, Nalgonda, Telangana, 508244"
        },
        {
            "username": "Arjun Rao",      
            "address": "Plot No. 42, Lakshmi Nagar, Bhupalpalle, Warangal, Telangana, 506329"
        },
        {
            "username": "Lakshmi Devi",   
            "address": "House No. 89, Kaveri Nagar, Choutuppal, Medak, Telangana, 502293"
        },
        {
            "username": "Sunita Kumari",  
            "address": "House No. 33, Prakash Nagar, Gudur, Medchal, Telangana, 502092"
        }
    ]
    return random.choice(dummy_users)
def list_audio_devices():
    print(sd.query_devices())

def get_voice_input():
    samplerate = 44100  # in Hz
    duration = 5        # seconds to record
    print("Listening... please speak now!")
    try:
        audio_data = sd.rec(int(samplerate * duration), samplerate=samplerate, channels=1, dtype='int16')
        sd.wait()  # Wait for recording to finish
        wav.write("temp_audio.wav", samplerate, audio_data)
        recognizer = sr.Recognizer()
        with sr.AudioFile("temp_audio.wav") as source:
            audio = recognizer.record(source)
        text = recognizer.recognize_google(audio)
        print("User said:", text)
        return text
    except Exception as e:
        print("Error capturing audio:", e)
        return None

def translate_text(text, target_lang='en'):
    translator = Translator()
    translated = translator.translate(text, dest=target_lang)
    print("Translated text:", translated.text)
    return translated.text

def send_sms(message):
    """
    Sends an SMS via Twilio with the provided message.
    """
    client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
    try:
        message_response = client.messages.create(
            body=message,
            from_=TWILIO_WHATSAPP_NUMBER,
            to=YOUR_PHONE_NUMBER
        )
        print("SMS sent successfully, SID:", message_response.sid)
    except Exception as e:
        print("Error sending SMS:", e)
def main():
    list_audio_devices()
    voice_text = get_voice_input()
    if not voice_text:
        print("No voice input detected.")
        return

    translated_text = translate_text(voice_text)
    dummy_info = get_dummy_user_info()
    username = dummy_info["username"]
    address = dummy_info["address"]
    message_body = f"User: {username}\nAddress: {address}\nSymptoms: {translated_text}"
    print("Final message to send via SMS:")
    print(message_body)
    
    send_sms(message_body)

if __name__ == "__main__":
    main()
