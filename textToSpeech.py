from gtts import gTTS
# before using the above library , first install that with the help of command : pip install gtts -|

# language = "en" 
language = "hi"
# text = "Hello and welcome to today's video. In this episode, we'll be discussing four ways to access GPT-4 for free without Chat GPT Plus."
text = "जीपीएस (GPS) और वीजुअल पोजीशनिंग सिस्टम (VPS) दोनों ही स्थान निर्धारण सिस्टम हैं लेकिन ये दोनों अलग-अलग कार्यों के लिए बनाए गए हैं।"
speech = gTTS(text=text, lang=language, slow=False, tld="com.au") 
speech.save("textToSpeech.mp3")




# Import the required module for text
# to speech conversion
# from gtts import gTTS

# This module is imported so that we can
# play the converted audio
# import os

# The text that you want to convert to audio
# mytext = 'Welcome to geeksforgeeks!'

# Language in which you want to convert
# language = 'en'

# Passing the text and language to the engine,
# here we have marked slow=False. Which tells
# the module that the converted audio should
# have a high speed
# myobj = gTTS(text=mytext, lang=language, slow=False)

# Saving the converted audio in a mp3 file named
# welcome
# myobj.save("welcome.mp3")

# Playing the converted file
# os.system("mpg321 welcome.mp3")
