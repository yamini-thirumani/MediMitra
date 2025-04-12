from flask import Flask, request, render_template
from flask import redirect, url_for, session
from flask import Flask, render_template, jsonify
import sounddevice as sd
import numpy as np
import scipy.io.wavfile as wav
import speech_recognition as sr
from googletrans import Translator
from twilio.rest import Client
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

# Twilio configuration
TWILIO_ACCOUNT_SID = "ACff81be9537caf2eb95ee96084f8fd042"
TWILIO_AUTH_TOKEN = "3a2b60b32751e209115b466053512bf2"
TWILIO_WHATSAPP_NUMBER = "+19786073866"
YOUR_PHONE_NUMBER = "+919652331047"

# Dummy user info
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

# Voice input
def get_voice_input():
    samplerate = 44100
    duration = 5  
    print("Listening for", duration, "seconds...")

    try:
        audio_data = sd.rec(int(samplerate * duration), samplerate=samplerate, channels=1, dtype='int16')
        sd.wait()
        print("Processing...")

        wav.write("temp_audio.wav", samplerate, audio_data)

        recognizer = sr.Recognizer()
        with sr.AudioFile("temp_audio.wav") as source:
            audio = recognizer.record(source)

        text = recognizer.recognize_google(audio)
        print("Recognized:", text)
        return text

    except Exception as e:
        print("Audio error:", e)
        return None

# Translation
def translate_text(text, target_lang='en'):
    translator = Translator()
    translated = translator.translate(text, dest=target_lang)
    return translated.text

def send_whatsapp_message(message):
    client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
    try:
        client.messages.create(
            from_=TWILIO_WHATSAPP_NUMBER,
            body=message,
            to=YOUR_PHONE_NUMBER
        )
        return True
    except Exception as e:
        print("Twilio Error:", e)
        return False


@app.route("/")
def dashboard():
    return render_template("dashboard.html")

@app.route('/catalog')
def show_catalog():
    return render_template('catelog.html')

@app.route('/home')
def home_redirect():
   return render_template('dashboard.html')

@app.route("/submit_form", methods=["POST"])
def submit_form():
    name = request.form.get("contact-name")
    email = request.form.get("contact-email")
    message = request.form.get("contact-message")

    print(f"Form submitted!\nName: {name}\nEmail: {email}\nMessage: {message}")

    return f"Thanks, {name}! We received your message."

@app.route("/process", methods=["POST"])
def process():
    text = get_voice_input()
    if text:
        translated = translate_text(text)
        dummy_info = get_dummy_user_info()
        username = dummy_info["username"]
        address = dummy_info["address"]

        message = f"User: {username}\nAddress: {address}\nSymptoms: {translated}"
        print("Final message to be sent:")
        print(message)

        sent = send_whatsapp_message(message)

        return jsonify({
            "original": text,
            "translated": translated,
            "username": username,
            "address": address,
            "status": "Message Sent" if sent else "Failed to Send"
        })
    
    return jsonify({"error": "Could not capture audio"})

if __name__ == "__main__":
    app.run(debug=True)
