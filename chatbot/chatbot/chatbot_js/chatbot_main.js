let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');


let intro = ["வணக்கம், AI கிளினிக்கிற்கு வரவேற்கிறோம், நான் உங்களுக்கு எப்படி உதவ முடியும்?"]
let namess=["My name is AI clinic. "]
let help = ["Can you place your hand in the sensor"]
let question = ["Take Benadryl syrup or alpha cf"]
let receiver= ["Take Throat calm or boiron"]
let available = ["Advil pain relief"]
let thank = ["Most welcome","Not an issue","Its my pleasure","Mention not","We hope you like our website"];
let closing = ['Ok bye-bye','As you wish, bye take-care','Bye-bye, see you soon..'];
let fever_precautions  = ['Rest and drink plenty of fluids. please Call the doctor if the fever is accompanied by a severe headache, stiff neck, shortness of breath, or other unusual signs or symptoms,please keep your hand on temperature sensor, Im prescribing you a Paracetamol.Please place your hands on temperature sensor']
let fever_precautions_18=[ 'If you are uncomfortable take acetaminophen , ibuprofen (Advil, MotrinIB, others) or aspirin. Read the label carefully for proper dosage, and be careful not to take more than one medication containing acetaminophen, such as some cough and cold medicines. Call the doctor if the fever doesnt respond to the medication, is consistently 103 F (39.4) C) or higher, or lasts longer than three days.']  
let sunburn_precaution=['Avoid more sun exposure,Take Ibuprofen']
let constipation_precautions = [' Drinking more fluids eating more highfibre foods and getting regular exercise may help to relieve constipation,Take docusate bisacodyl']
let back_pain = ['Keep resting for up to two days may help and perform regular exercise. Use diclofenac, naproxen in severe cases']
let food_poison_precautions=['Do not eat Undercooked or raw food from animals,Raw or lightly cooked sprouts+,Unpasteurized (raw) milk and juices Soft cheese , unless it is labeled as made with pasteurized milk']
let headache= ['try take good sleep at night, take 1 glass of water at night before bed. I am prescribing you a medicine,Acetaminophen']
let tooth_ache = [' Brush regularly with a fluoride toothpaste ,Floss at least once a day.I am prescribing you a medicine Advil Liqui-Gels']
let acne = ['Precautions:Properly wash your face, Stay hydrated,Try not to touch your face, Limit sun exposure I am prescribing you a medicine doxycycline, minocycline']
let dry_eyes = [' Avoid air blowing in your eyes. Consider wearing wraparound sunglasses or other protective eyewear. Stop smoking and avoid smoke. Medicine: carboxymethyl- cellulose-sodium eye drops.']
let stomach_ache = ['stomach ache precaution:Apply a warm compress to your stomach.I am prescribing you a medicineSimethicone']
let common_cold_precautions = ['Wash your hands after coughing, sneezing, blowing your nose, dextromethorphan medicine is recommended. You can get this medicine in a nearby pharmacy']
let dandruff = ['Adjust Your Shampoo and Styling Products.Stress Management medicine:Nizoral Shampoo']
let sore_throat = [' Drink fluids,Try comforting foods and beverage,Gargle with saltwater,Stay at home until youre no longer sick. ude Medicine acetaminophen or ibuprofen']
let muscle_pain = [' Stretch your muscles before engaging in physical activity and after workouts. Stay hydrated, especially on days when you’re active. medicine: ibuprofen, naproxen']
let eye_pain = [' Handle chemicals with caution. Contact lens hygiene medicine: Durezol ,Prolensa']
let indigestion = ['Drink beverages after rather than during meals.Avoid late-night eating.Try to relax after meals. Avoid spicy foods. If you smoke, quit. Avoid alcohol. Take Mylanta']
let heartburn = ['prevention: Avoid foods or drinks that may trigger your symptoms, such as acidic foods, alcohol, etc . Wait at least 3 hours after eating to lie down.alka-seltzer,gaviscon'] 
let mouth_ulcer = ['mouth ulcer prevention: Maintain a good oral hygiene. Avoid excessive sun exposure to your lips. Visit your dentist regularly. medicine: Curasil,Dentogel,Fitgel']
let ear_ache = ['Precautions:Apply a cold washcloth to the ear.  Avoid getting the ear wet. Sit upright to help relieve ear pressure.Chew gum to help relieve pressure. Feed an infant to help them relieve their pressure']
let acidity = ['Change your eating pattern.  Avoid sleeping with a full stomach.Stay fit take medicine Hydrotalcite,Nizatidine']
let diarrhoea = ['prevention: Drink only bottled water, even for tooth brushing.Avoid eating food from street vendors. Avoid ice made with tap water. medicine:loperamide,Imodiumatropine / diphenoxylate ']
let nausea = ['Drink clear or ice-cold drinks.  Eat light, bland foods. Avoid fried, greasy, or sweet foods.  Eat slowly and eat smaller, more frequent meals.Drinking gradually larger amounts of clear liquids Medicine:Cinnarizine,Hyoscine,Domperidone ']
let migrane =['Avoid loud noises and bright lights Eat and sleep on a regular schedule.I recommend you sumatriptan']
let typhoid =[' typhoid prevention: Peeling fruit with clean hands.  Avoiding raw, marinated or smoked foods,Not consuming ice in drinks, artisanal dairy products or fresh fruit juices']
let ringworm = ['Don’t walk barefoot in areas like locker rooms or public showers.clip your fingernails and toenails short and keep them clean. medicine: Lotrisone ,Nizoral']
let l_blood = ['Low blood pressurePrecautionsDrink plenty of water. Eat a balanced diet. Limit or avoid alcohol. Check your blood sugar. Wear compression stockings. Use more salt. Fludrocortisone,Midodrine']
let h_blood =['high blood pressure prevention Being at a healthy weight. Limiting alcohol. Not smoking  medicine is lisinopril, amlodipine, atenolol']
let sugar =['diabetes prevention : Losing weight and keeping it off. Get regular exercise. Do not smoke. follow the medication regularly']
let obes =['High cholesterolPrecautions Eat a low-salt diet that emphasizes fruits, vegetables and whole grainsLimit the amount of animal fats and use good fats in moderationLose extra pounds and maintain a healthy weightQuit smokingExercise on most daysof week for at least 30 minutes.']
let flu =['Wash your hands often with soap and water, or with an alcohol-based hand rub, especially after coughing or sneezing, and before eating.Cover your mouth and nose with a tissue when you cough or sneeze, If you don’t have a tissue, use the upper part of your sleeve,Avoid touching your eyes, nose, and mouth,']
let wheez=['WheezingDrink herbal tea or have some warm water. You can also try inhaling steam, since wheezing can be caused by dry air.Medicine  A bronchodilator albuterol']
let knee_pain=['Give your knee some rest, apply ice to reduce swelling, wear a compressive bandage, and keep your knee elevated.Medicine moov strong gel']

let dizz =['diziness prevention :Drink Plenty Of Water Reduce Your Salt Intake Try Ginger']
let dryskin = ['apply mosteriser and keep yourself hydrated']
let rash =['']

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang="en-IN";

function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Can you repeat please.....";




    if(message.includes("hai")||message.includes("hello")||message.includes("hay")||message.includes("hey")||message.includes("Aloha")||message.includes("Hi")||message.includes("Hi bot")){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.includes('dry skin')||message.includes('dryness')||message.includes('dry skin')||message.includes('flaky')){
        let finalresult = dryskin[Math.floor(Math.random() * dryskin.length)];
        speech.text = finalresult;
    }
    if(message.includes('typhoid')){
        let finalresult = typhoid[Math.floor(Math.random() * typhoid.length)];
        speech.text = finalresult;
    }
    if(message.includes('obesity')||message.includes('cholestrol')||message.includes('obese'||message.includes('fat'))){
        let finalresult =  obes[Math.floor(Math.random() * obes.length)];
        speech.text = finalresult;
    }
    
    if(message.includes('name')||message.includes('what is your')){
        let finalresult =  namess[Math.floor(Math.random() * namess.length)];
        speech.text = finalresult;
    } 
    if(message.includes('flu')){
        let finalresult = typhoid[Math.floor(Math.random() * typhoid.length)];
        speech.text = finalresult;
    }
    if(message.includes('wheezing')||message.includes('asthma')||message.includes('breathing trouble')){
        let finalresult = wheez[Math.floor(Math.random() * wheez.length)];
        speech.text = finalresult;
    }
    if(message.includes('dizziness')||message.includes('giddiness')||message.includes('drowsy')||message.includes('sleep')||message.includes('tierd')||message.includes('tiresome')||message.includes('exhausted')) {
        let finalresult = dizz[Math.floor(Math.random() * dizz.length)];
        speech.text = finalresult;
    }
    
    
    
    if(message.includes('I have throat infection')){
        let finalresult = receiver[Math.floor(Math.random() * receiver.length)];
        speech.text = finalresult;
    } 
    if(message.includes('food poison')||message.includes('nausea')||message.includes('vomit')){
        let finalresult = food_poison_precautions[Math.floor(Math.random() * food_poison_precautions.length)];
        speech.text = finalresult;
    } 
    if(message.includes('low blood pressure')||message.includes('low BP')||message.includes('hypotension')){
        let finalresult = l_blood[Math.floor(Math.random() * l_blood.length)];
        speech.text = finalresult;
    } 
    if(message.includes('high blood pressure')||message.includes('high BP')||message.includes('hypertension')){
        let finalresult = h_blood[Math.floor(Math.random() * h_blood.length)];
        speech.text = finalresult;
    }
    if(message.includes('knee pain')||message.includes('leg pain')||message.includes('joint pain')){
        let finalresult = knee_pain[Math.floor(Math.random() * knee_pain.length)];
        speech.text = finalresult;
    }
    
    
    if(message.includes('common cold')||message.includes(' nose')||message.includes('cold')||message.includes('cough')){
        let finalresult = common_cold_precautions[Math.floor(Math.random() * common_cold_precautions.length)];
        speech.text = finalresult;
    }
    if(message.includes('diabetis')||message.includes('sugar')||message.includes('diabetes')){
        let finalresult = sugar[Math.floor(Math.random() * sugar.length)];
        speech.text = finalresult;
    }

    if(message.includes("fever")||message.includes('temperature')){
         let finalresult = fever_precautions[Math.floor(Math.random() * fever_precautions.length)];
        speech.text = finalresult;
    }
        
    if(message.includes('mild acne')||message.includes('pimples')||message.includes('acne')){
        let finalresult = acne[Math.floor(Math.random()* acne.length)];
        speech.text = finalresult;
    }
    if(message.includes("dry eyes")||message.includes('red eyes')||message.includes('madras eye')){
        let finalresult = dry_eyes[Math.floor(Math.random() * dry_eyes.length)];
        speech.text = finalresult;
    }
    if(message.includes("stomach")||message.includes("stomach ache")){
        let finalresult = stomach_ache[Math.floor(Math.random() * stomach_ache.length)];
        speech.text = finalresult;
    }
    if(message.includes("ringworm")){
        let finalresult = ringworm[Math.floor(Math.random() * ringworm.length)];
        speech.text = finalresult;
    }
    if(message.includes("constipation")){
         let finalresult = constipation_precautions[Math.floor(Math.random() * constipation_precautions.length)];
        speech.text = finalresult;
    }
    if(message.includes("sunburn")||message.includes('tan')){
        let finalresult = sunburn_precaution[Math.floor(Math.random() * sunburn_precaution.length)];
        speech.text = finalresult;
    }
    if(message.includes("dandruff")){
        let finalresult = dandruff[Math.floor(Math.random() * dandruff.length)];
        speech.text = finalresult;
    }
    if(message.includes("sore throat")||message.includes('throat')){
        let finalresult = sore_throat[Math.floor(Math.random() * sore_throat.length)];
        speech.text = finalresult;
    }

    if(message.includes("eye pain")||message.includes("ear pain")||message.includes("ear allergy")||message.includes("vision")){
        let finalresult = eye_pain[Math.floor(Math.random()* eye_pain.length)];
        speech.text = finalresult;
    }
    if(message.includes("indigestion")||message.includes("indigestion")||message.includes("acidity")||message.includes("gastric")){
        let finalresult = indigestion[Math.floor(Math.random()* indigestion.length)];
        speech.text = finalresult;
    }
    if(message.includes("heart burn")){
        let finalresult = heartburn[Math.floor(Math.random()* heartburn.length)];
        speech.text = finalresult;
    }
    if(message.includes("mouth ulcer")){
        let finalresult = mouth_ulcer[Math.floor(Math.random() *mout_ulcer.length)];
        speech.text = finalresult;
    }
    if(message.includes("nappy rash")){
        let finalresult = nappy_rash[Math.floor(Math.random() *nappy_rash.length)];
        speech.text = finalresult;
    }

    if(message.includes("muscle pain")|| message.includes("joint pain")){
            let finalresult = muscle_pain[Math.floor(Math.random() *muscle_pain.length)];
            speech.text = finalresult;
    }
    if(message.includes("ear ache")||message.includes("ear pain")){
        let finalresult = ear_ache[Math.floor(Math.random() *ear_ache.length)];
        speech.text = finalresult;
    }
    
    if(message.includes("nausea")||message.includes("vomit")||message.includes("thirst")||message.includes("dehydration")){
        let finalresult = nausea[Math.floor(Math.random()* nausea.length)];
        speech.text = finalresult;
    }
    if(message.includes('diarrhoea')){
        let finalresult = diarrhoea[Math.floor(Math.random()* diarrhoea.length)];
        speech.text = finalresult;
    }
    if(message.includes("migraine")){
        let finalresult = migrane[Math.floor(Math.random() * migrane.length)];
        speech.text = finalresult;
    }



    


    if(message.includes("headache")||message.includes("head pain")){
        let finalresult = headache[Math.floor(Math.random() * headache.length)];
        speech.text = finalresult;
    }
    if(message.includes("tooth ache")||message.includes("tooth pain")||message.includes("decay")){
        let finalresult = tooth_ache[Math.floor(Math.random() * tooth_ache.length)];
        speech.text = finalresult;
    }
    if(message.includes("back pain")||message.includes("spine pain")){
        let finalresult = back_pain[Math.floor(Math.random() * back_pain.length)];
        speech.text = finalresult;
    }

    if(message.includes('talk to you later')||message.includes("bye")||message.includes("leave")){
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}


recognition.onend=function(){
    mic.style.background="#ff3b3b";
}
mic.addEventListener("click", function(){
    mic.style.background='#39c81f';
    recognition.start();
    console.log("Activated");
})