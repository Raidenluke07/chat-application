# -*- coding: utf-8 -*-


import speech_recognition as sr
from gtts import gTTS
from PIL import Image
import os


# Code using these modules can go here


recognizer = sr.Recognizer()


def show_user_msg(user_msg):
    print(f"User: {user_msg}")


def show_chatbot_msg(chatbot_msg):
    print(f"Chatbot: {chatbot_msg}")


def show_image(image_path):
    img = Image.open(image_path)
    img.show()


def chatbot_voice(message, image_path=None):
    show_chatbot_msg("Bot: " + message)

    # Text-to-speech
    tts = gTTS(text=message, lang='ta')
    tts.save("response.mp3")
    os.system("start response.mp3")

    # Show image if provided
    if image_path:
        show_image(image_path)


def process_user_input(user_input):
    show_user_msg(user_input)

    if any(keyword in user_input.lower() for keyword in ["ஹலோ"]):
        chatbot_voice("வணக்கம், என் பெயர் ஏஆய் கிளினிக். நீங்கள் எப்படி உதவ விரும்புகிறீர்கள?",
                      )
    elif any(keyword in user_input.lower() for keyword in ["காய்ச்சல்"]):
        chatbot_voice("ஓய்வெடுத்து நிறைய திரவங்களை குடிக்கவும். ", )
    elif any(keyword in user_input.lower() for keyword in ["முதுகு வலி"]):
        chatbot_voice(
            "இரண்டு நாட்கள் வரை தொடர்ந்து ஓய்வெடுப்பது உதவுவதோடு வழக்கமான உடற்பயிற்சியையும் செய்யலாம். கடுமையான சந்தர்ப்பங்களில் diclofenac, naproxen பயன்படுத்தவும்",
            )
    elif any(keyword in user_input.lower() for keyword in ["உணவு_விஷம்"]):
        chatbot_voice(
            "பேஸ்டுரைஸ் செய்யப்பட்ட பாலில் தயாரிக்கப்பட்டது என பெயரிடப்பட்டிருந்தால் தவிர, விலங்குகளிடமிருந்து சமைக்கப்படாத அல்லது பச்சையான உணவு, பச்சையாகவோ அல்லது லேசாக சமைத்த முளைகள்+, பதப்படுத்தப்படாத (பச்சையாக) பால் மற்றும் பழச்சாறுகள் மென்மையான பாலாடைக்கட்டி சாப்பிட வேண்டாம். ",
            )
    elif any(keyword in user_input.lower() for keyword in ["தலைவலி"]):
        chatbot_voice(
            "இரவில் நன்றாக தூங்க முயற்சி செய்யுங்கள், இரவில் படுக்கைக்கு முன் 1 கிளாஸ் தண்ணீர் எடுத்துக் கொள்ளுங்கள். நான் உங்களுக்கு அசெட்டமினோஃபென் என்ற மருந்தை பரிந்துரைக்கிறேன்",
            )
    elif any(keyword in user_input.lower() for keyword in ["முகப்பரு"]):
        chatbot_voice(
            "உங்கள் முகத்தை சரியாகக் கழுவுங்கள், நீரேற்றத்துடன் இருங்கள், உங்கள் முகத்தைத் தொடாமல் இருங்கள், சூரிய ஒளியைக் கட்டுப்படுத்துங்கள், நான் உங்களுக்கு டாக்ஸிசைக்ளின், மினோசைக்ளின் என்ற மருந்தை பரிந்துரைக்கிறேன் ",
           )
    elif any(keyword in user_input.lower() for keyword in ["வறண்ட_கண்கள்"]):
        chatbot_voice(
            "உங்கள் கண்களில் காற்று வீசுவதைத் தவிர்க்கவும். ரேப்பரவுண்ட் சன்கிளாஸ்கள் அல்லது பிற பாதுகாப்பு கண்ணாடிகளை அணிவதைக் கவனியுங்கள். புகைபிடிப்பதை நிறுத்துங்கள் மற்றும் புகைபிடிப்பதை தவிர்க்கவும். மருந்து: கார்பாக்சிமெதில்- செல்லுலோஸ்-சோடியம் கண் சொட்டுகள். ",
            )
    elif any(keyword in user_input.lower() for keyword in ["வயிற்று வலி"]):
        chatbot_voice(
            "வயிற்று வலி முன்னெச்சரிக்கை: உங்கள் வயிற்றில் ஒரு சூடான அழுத்தத்தைப் பயன்படுத்துங்கள். நான் உங்களுக்கு சிமெதிகோன் என்ற மருந்தை பரிந்துரைக்கிறேன் ",
           )
    elif any(keyword in user_input.lower() for keyword in ["சாதாரண சளி"]):
        chatbot_voice(
            "இருமல், தும்மல், மூக்கு ஊதினால் கைகளை கழுவ வேண்டும், டெக்ஸ்ட்ரோமெதோர்பன் மருந்து பரிந்துரைக்கப்படுகிறது. அருகிலுள்ள மருந்தகத்தில் இந்த மருந்தைப் பெறலாம்j",
       )
    elif any(keyword in user_input.lower() for keyword in ["பொடுகு"]):
        chatbot_voice(
            "உங்கள் ஷாம்பு மற்றும் ஸ்டைலிங் தயாரிப்புகளை சரிசெய்யவும். அழுத்த மேலாண்மை மருந்து: நிஜோரல் ஷாம்பு ",
          )
    elif any(keyword in user_input.lower() for keyword in ["தொண்டை வலி"]):
        chatbot_voice(
            "திரவங்களை அருந்துங்கள், ஆறுதல் தரும் உணவுகள் மற்றும் பானங்களை முயற்சிக்கவும், உப்புநீரில் வாய் கொப்பளிக்கவும், உங்களுக்கு உடல்நிலை சரியில்லாமல் இருக்கும் வரை வீட்டிலேயே இருங்கள். ude மருந்து அசிடமினோஃபென் அல்லது இப்யூபுரூஃபன் ",)
            
    elif any(keyword in user_input.lower() for keyword in ["தசை வலி"]):
        chatbot_voice(
            "உடல் செயல்பாடுகளில் ஈடுபடுவதற்கு முன்பும் உடற்பயிற்சிகளுக்குப் பிறகும் உங்கள் தசைகளை நீட்டவும். குறிப்பாக நீங்கள் சுறுசுறுப்பாக இருக்கும் நாட்களில் நீரேற்றமாக இருங்கள். மருந்து: இப்யூபுரூஃபன், நாப்ராக்ஸன் ",
          )
    elif any(keyword in user_input.lower() for keyword in ["கண்_வலி"]):
        chatbot_voice("இரசாயனங்களை எச்சரிக்கையுடன் கையாளவும். காண்டாக்ட் லென்ஸ் சுகாதார மருந்து: டியூரெசோல், ப்ரோலென் ",
                   )
    elif any(keyword in user_input.lower() for keyword in ["வாய்ப்புண்"]):
        chatbot_voice(
            "நல்ல வாய்வழி சுகாதாரத்தை பராமரிக்கவும். உங்கள் உதடுகளில் அதிக சூரிய ஒளியைத் தவிர்க்கவும். உங்கள் பல் மருத்துவரை தவறாமல் பார்வையிடவும். மருந்து: குராசில், டென்டோஜெல், ஃபிட்ஜெல் ",
          )
    elif any(keyword in user_input.lower() for keyword in ["காது_வலி"]):
        chatbot_voice(
            "காதுக்கு குளிர்ந்த துணியைப் பயன்படுத்துங்கள். காது ஈரமாவதைத் தவிர்க்கவும். காது அழுத்தத்தைக் குறைக்க நிமிர்ந்து உட்காரவும். அழுத்தத்தைக் குறைக்க உதவும் பசையை மெல்லவும். குழந்தையின் அழுத்தத்தைக் குறைக்க உதவும் வகையில் குழந்தைக்கு உணவளிக்கவும்",
           )
    elif any(keyword in user_input.lower() for keyword in ["அமிலத்தன்மை"]):
        chatbot_voice(
            "உங்கள் உணவு முறையை மாற்றவும். வயிறு நிறைந்து தூங்குவதைத் தவிர்க்கவும். ஆரோக்கியமாக இருங்கள் ஹைட்ரோடால்சைட், நிசாடிடின் என்ற மருந்தை உட்கொள்ளுங்கள்",
            )
    elif any(keyword in user_input.lower() for keyword in ["வயிற்றுப்போக்கு"]):
        chatbot_voice(
            "பல் துலக்குவதற்கு கூட பாட்டில் தண்ணீரை மட்டுமே குடிக்கவும். தெருவோர வியாபாரிகளின் உணவை சாப்பிடுவதை தவிர்க்கவும். குழாய் நீரில் செய்யப்பட்ட பனிக்கட்டியைத் தவிர்க்கவும். மருந்து: லோபரமைடு, இமோடியமட்ரோபின் / டிஃபெனாக்சைலேட்//8",
           )
    elif any(keyword in user_input.lower() for keyword in ["குமட்டல்"]):
        chatbot_voice(
            "தெளிவான அல்லது குளிர்ந்த பானங்களை குடிக்கவும். லேசான, சாதுவான உணவுகளை உண்ணுங்கள். வறுத்த, க்ரீஸ் அல்லது இனிப்பு உணவுகளை தவிர்க்கவும். மெதுவாக சாப்பிடுங்கள் மற்றும் சிறிய, அடிக்கடி உணவுகளை உண்ணுங்கள். படிப்படியாக அதிக அளவு தெளிவான திரவங்களை குடிப்பது மருந்து: சின்னாரிசைன், ஹையோசின், டோம்பெரிடோன் ",
            )
    elif any(keyword in user_input.lower() for keyword in ["டைபாய்டு"]):
        chatbot_voice(
            "டைபாய்டு தடுப்பு: சுத்தமான கைகளால் பழங்களை உரிக்கவும். பச்சையாக, ஊறவைத்த அல்லது புகைபிடித்த உணவுகளைத் தவிர்த்தல், பானங்கள், கைவினைப் பொருட்களான பால் பொருட்கள் அல்லது புதிய பழச்சாறுகளில் பனிக்கட்டியை உட்கொள்ளாதது ",
            )
    elif any(keyword in user_input.lower() for keyword in ["சர்க்கரை நோய்"]):
        chatbot_voice(
            "எடையைக் குறைத்து, அதைத் தடுத்து நிறுத்துதல். வழக்கமான உடற்பயிற்சி செய்யுங்கள். புகைப்பிடிக்க கூடாது. மருந்தை தவறாமல் பின்பற்றவும்",
            )
    elif any(keyword in user_input.lower() for keyword in ["கொலஸ்ட்ரால்", "உடல் பருமன்"]):
        chatbot_voice("ஓய்வெடுத்து நிறைய திரவங்களை குடிக்கவும். ", )

    else:
        chatbot_voice("மீண்டும் ஒருமுறை முயற்சிக்கவும்.")


with sr.Microphone() as source:
    print("ஏதாவது கூறுங்கள்...")
    recognizer.adjust_for_ambient_noise(source)
    audio = recognizer.listen(source)


def main():
    recognizer = sr.Recognizer()

    while True:
        with sr.Microphone() as source:
            print("ஏதாவது கூறுங்கள்...")
            recognizer.adjust_for_ambient_noise(source)
            audio = recognizer.listen(source)

        try:
            user_input = recognizer.recognize_google(audio, language="ta-IN")
            process_user_input(user_input)

            # Check if the user input contains the keyword "thank"
            if "நன்றி" in user_input.lower():
                chatbot_voice("நன்றி! சந்தோஷமாக...")
                break  # Exit the loop when the user says "thank"
        except sr.UnknownValueError:
            print("மன்னிக்கவும், எனக்கு அது புரியவில்லை.")
        except sr.RequestError as e:
            print(f"Could not request results from Google Speech Recognition service; {e}")


if __name__ == "__main__":
    main()