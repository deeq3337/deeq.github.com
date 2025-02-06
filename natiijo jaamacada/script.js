document.getElementById('resultForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const studentID = document.getElementById('studentID' ).value; 
    

    
    const results = {
"149": { "name": "nuur farah yusuf", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 24 , "final": "stll" , "total": 44 , "grade": "stll" , "img": ""},
"157": { "name": "ridwan cabdi muse", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 8 , "final": "stll" , "total": 28 , "grade": "stll" , },
"190": { "name": "wali hamdi duale", "assignment": "10", "test": 0 , "attendance": "5" , "midexam": 14 , "final": "stll" , "total": 29 , "grade": "stll" ,},
"038": { "name": "caisha ismacil cali", "assignment": "10", "test": 0 , "attendance": "8" , "midexam": 10 , "final": "stll" , "total": 28 , "grade": "stll" ,},
"94": { "name": "kawsar mohamed abdirahman", "assignment": "0", "test": 0 , "attendance": "10" , "midexam": 22  , "final": "stll" , "total": 32 , "grade": "stll" ,},
"160": { "name": "ruman ibrahim muhumed", "assignment": "0", "test": 0 , "attendance": "0" , "midexam": 8 , "final": "stll" , "total": 8 , "grade": "stll" ,},
"27": { "name": "abshiro barre ismacil", "assignment": "0", "test": 0 , "attendance": "0" , "midexam": 8 , "final": "stll" , "total": 8 , "grade": "stll" ,},
"197": { "name": "khadro sekh cabdinur", "assignment": "0", "test": 0 , "attendance": "0" , "midexam":  10, "final": "stll" , "total": 10 , "grade": "stll" ,},
"178": { "name": "siyad jama ali", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 12 , "final": "stll" , "total": 32 , "grade": "stll" ,},
"53": { "name": "faisa arab hirbe", "assignment": "0", "test": 0 , "attendance": "0" , "midexam": 10  , "final": "stll" , "total": 10 , "grade": "stll" ,},
"103": { "name": "mahamed ahmed diriye ", "assignment": "", "test": 0 , "attendance": "10" , "midexam": 0 , "final": "stll" , "total": 0 , "grade": "stll" ,},
"169": { "name": "saytuun xasan maxamuud", "assignment": "0", "test": 0 , "attendance": "8" , "midexam": 16 , "final": "stll" , "total": 24 , "grade": "stll" ,},
"31": { "name": "axmad shekh muxumed", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 4 , "final": "stll" , "total": 14 , "grade": "stll" ,},
"74": { "name": "xuseen cabdi dhaqane", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 4  , "final": "stll" , "total": 24 , "grade": "stll" ,},
 "98": { "name": "mahamed abdi brahim", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 18 , "final": "stll" , "total":  38, "grade": "stll" ,},
"900": { "name": "kawsar cabdulahi jama", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 8 , "final": "stll" , "total": 28 , "grade": "stll" ,},
"901": { "name": "kawsar cabdi cumar", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 16 , "final": "stll" , "total": 36 , "grade": "stll" ,},
"902": { "name": "khadar maxamad xamud", "assignment": "", "test": 0 , "attendance": "10" , "midexam": 8 , "final": "stll" , "total": 18 , "grade": "stll" ,},
"903": { "name": "farxiyo mukhtaar salad", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 24 , "final": "stll" , "total": 44 , "grade": "stll" ,},
"904": { "name": "foos cabdile muhumed", "assignment": "10", "test": 0 , "attendance": "10" , "midexam":22  , "final": "stll" , "total": 44 , "grade": "stll" ,},
"905": { "name": "deko abdirisak mer", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 8 , "final": "stll" , "total": 28 , "grade": "stll" ,},
"906": { "name": "mohamed ahmed diriye", "assignment": "0", "test": 0 , "attendance": "" , "midexam":  20, "final": "stll" , "total": 20 , "grade": "stll" ,},
"907": { "name": "nasri rashid muhumed", "assignment": "0", "test": 0 , "attendance": "10" , "midexam": 12 , "final": "stll" , "total": 22 , "grade": "stll" ,},
"908": { "name": "nasteha ali nur", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 18 , "final": "stll" , "total": 38 , "grade": "stll" ,},
"909": { "name": "hadaaya husein muse", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 6 , "final": "stll" , "total":26  , "grade": "stll" ,},
"1000": { "name": "istaahil yarow nur", "assignment": "0", "test": 0 , "attendance": "5" , "midexam": 14 , "final": "stll" , "total": 19 , "grade": "stll" ,},
"1001": { "name": "abdirashid siyad hassan", "assignment": "0", "test": 0 , "attendance": "8" , "midexam": 12 , "final": "stll" , "total": 20 , "grade": "stll" ,},
"1002": { "name": "casho maxamud dubad", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 10 , "final": "stll" , "total": 30 , "grade": "stll" ,},
"1003": { "name": "ibrahim shad gedi", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 22 , "final": "stll" , "total": 44 , "grade": "stll" ,},   
 "1004": { "name": "nastexo mahamad ahmed", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 18 , "final": "stll" , "total": 38 , "grade": "stll" ,},
"73": { "name": "hindi mohamed barqab", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 6 , "final": "stll" , "total": 26 , "grade": "stll" ,},
"155": { "name": "ramlo raheye aman", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 12 , "final": "stll" , "total": 32 , "grade": "stll" ,},
"1005": { "name": "abdirahman mahad garad", "assignment": "5", "test": 0 , "attendance": "5" , "midexam": 12 , "final": "stll" , "total": 22 , "grade": "stll" ,},
"1006": { "name": "cabdifatah muhumed mukhtar", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 6 , "final": "stll" , "total": 26 , "grade": "stll" ,},
"1007": { "name": "hilal cabdi maxamud", "assignment": "0", "test": 0 , "attendance": "0" , "midexam": 10 , "final": "stll" , "total": 10 , "grade": "stll" ,},
"1008": { "name": "jamcale cabdi husen", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 22 , "final": "stll" , "total": 44 , "grade": "stll" ,},
"1009": { "name": "khayro cabdulahi derow", "assignment": "0", "test": 0 , "attendance": "10" , "midexam": 16 , "final": "stll" , "total": 26 , "grade": "stll" ,},
"1010": { "name": "najmo sicid cali", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 12 , "final": "stll" , "total": 32 , "grade": "stll" ,},
"1011": { "name": "mahamud abdulahi hassan", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 12 , "final": "stll" , "total": 32 , "grade": "stll" ,},
"1012": { "name": "nimco cabdirahman hasan", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 20 , "final": "stll" , "total": 40 , "grade": "stll" ,},
"1013": { "name": "mohamed muhumed ali", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 16 , "final": "stll" , "total": 36 , "grade": "stll" ,},
"1014": { "name": "ayan muhumed sahal", "assignment": "10", "test": 0 , "attendance": "8" , "midexam": 8 , "final": "stll" , "total": 26 , "grade": "stll" ,},
"1015": { "name": "faysal ali abdulahi", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 6 , "final": "stll" , "total": 26 , "grade": "stll" ,},
"1016": { "name": "cabdi dhah hasan", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 20 , "final": "stll" , "total": 40 , "grade": "stll" ,},
"1017": { "name": "kaaho yusuf mahamed", "assignment": "0", "test": 0 , "attendance": "10" , "midexam": 14 , "final": "stll" , "total": 24 , "grade": "stll" ,},
"1018": { "name": "cabdinasir hasan mahamd", "assignment": "0", "test": 0 , "attendance": "10" , "midexam": 4 , "final": "stll" , "total": 14 , "grade": "stll" ,},
"196": { "name": "aamiin maxamuud ismcil", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 2 , "final": "stll" , "total": 22 , "grade": "stll" ,},
"187": { "name": "sundus mohamed osman", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 20 , "final": "stll" , "total": 40 , "grade": "stll" ,},
"33": { "name": "amal ibrahim husen", "assignment": "0", "test": 0 , "attendance": "10" , "midexam": 10 , "final": "stll" , "total": 20 , "grade": "stll" ,},
"76": { "name": "ikran abdifatah ali", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 16 , "final": "stll" , "total": 36 , "grade": "stll" ,},
"82": { "name": "khadar abdi halane", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 8 , "final": "stll" , "total": 28 , "grade": "stll" ,},
"113": { "name": "mohamed abdi omer", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 10 , "final": "stll" , "total": 30 , "grade": "stll" ,},
"179": { "name": "siyaado abdi dhimbil", "assignment": "0", "test": 0 , "attendance": "10" , "midexam": 14  , "final": "stll" , "total": 34 , "grade": "stll" ,},
"1019": { "name": "mohamed nuur maydal", "assignment": "0", "test": 0 , "attendance": "10" , "midexam": 8 , "final": "stll" , "total": 18 , "grade": "stll" ,},
"1020": { "name": "shakir ahmed hared", "assignment": "0", "test": 0 , "attendance": "10" , "midexam": 12 , "final": "stll" , "total": 22 , "grade": "stll" ,},
"133": { "name": "nasteho abdirahman ali", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 4 , "final": "stll" , "total": 24 , "grade": "stll" ,},
"107": { "name": "miski kahin abdirashid", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 14 , "final": "stll" , "total": 34 , "grade": "stll" ,},   
"171": { "name": "shamso jele korar", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 10 , "final": "stll" , "total": 30 , "grade": "stll" ,},
"189": { "name": "wali abdinur hasan", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 12 , "final": "stll" , "total": 32 , "grade": "stll" ,},
"32": { "name": "amal abdulahi omer", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 6 , "final": "stll" , "total": 26 , "grade": "stll" ,},
"183": { "name": "sumayo ahmed abdulahi", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 8 , "final": "stll" , "total": 28 , "grade": "stll" ,},
"177": { "name": "samran abdulqadir derow", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 10 , "final": "stll" , "total": 20 , "grade": "stll" ,},
"125": { "name": "najmo mahamud dubad", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 30 , "final": "stll" , "total": 50 , "grade": "stll" ,},
"1021": { "name": "muno ismail serar", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 12 , "final": "stll" , "total": 32 , "grade": "stll" ,},
"144": { "name": "nimco abdulahi maxamud", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 12 , "final": "stll" , "total": 32 , "grade": "stll" ,},
"104": { "name": "mohamed mahamud galow", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 12 , "final": "stll" , "total": 32 , "grade": "stll" ,},
"1022": { "name": "roodo husen hassan", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 12 , "final": "stll" , "total": 32 , "grade": "stll" ,},
"115": { "name": "mohamed gure jele", "assignment": "0", "test": 0 , "attendance": "10" , "midexam": 14 , "final": "stll" , "total": 24 , "grade": "stll" ,},
"135": { "name": "nasteha abdi duwane", "assignment": "0", "test": 0 , "attendance": "10" , "midexam": 16 , "final": "stll" , "total": 26 , "grade": "stll" ,},
"146": { "name": "nimca cumar kahin", "assignment": "0", "test": 0 , "attendance": "0" , "midexam": 16 , "final": "stll" , "total": 16 , "grade": "stll" ,},
"165": { "name": "sahro mahad sahal", "assignment": "0", "test": 0 , "attendance": "10" , "midexam": 8 , "final": "stll" , "total": 18 , "grade": "stll" ,},
"188": { "name": "ubax shafi axmed", "assignment": "10", "test": 0 , "attendance": "0" , "midexam": 10 , "final": "stll" , "total": 20 , "grade": "stll" ,},
"1023": { "name": "xared abdulahi abdi", "assignment": "0", "test": 0 , "attendance": "10" , "midexam": 24 , "final": "stll" , "total": 34 , "grade": "stll" ,},
"192": { "name": "yasmin shugri guhad", "assignment": "0", "test": 0 , "attendance": "0" , "midexam": 10 , "final": "stll" , "total": 10 , "grade": "stll" ,},
"35": { "name": "canab axmed ali", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 12 , "final": "stll" , "total": 32 , "grade": "stll" ,},
"109": { "name": "yasmin jele korar", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 8 , "final": "stll" , "total": 28 , "grade": "stll" ,},
"58": { "name": "fartun abdiqadir hassan", "assignment": "0", "test": 0 , "attendance": "10" , "midexam": 8 , "final": "stll" , "total": 18 , "grade": "stll" ,},
"159": { "name": "roodo mawlid muse", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 8 , "final": "stll" , "total": 28 , "grade": "stll" ,},
"150": { "name": "nuurto muhumed abdulahi", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 12 , "final": "stll" , "total": 32 , "grade": "stll" ,},
"1024": { "name": "nadifo moalim keyd", "assignment": "0", "test": 0 , "attendance": "10" , "midexam": 12 , "final": "stll" , "total": 2 , "grade": "stll" ,},
"140": { "name": "nastexo yusuf cumar", "assignment": "0", "test": 0 , "attendance": "10" , "midexam": 18 , "final": "stll" , "total": 28 , "grade": "stll" ,},
"130": { "name": "nasri ahmed aden", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 4 , "final": "stll" , "total": 24 , "grade": "stll" ,},
"174": { "name": "shugri cabdirashid nur", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 10 , "final": "stll" , "total": 30 , "grade": "stll" ,},
"1025": { "name": "sucdi cabdi diriye", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 10 , "final": "stll" , "total": 30 , "grade": "stll" ,},
"1026": { "name": "abdi shugri mohamed", "assignment": "0", "test": 0 , "attendance": "10" , "midexam": 30 , "final": "stll" , "total": 40 , "grade": "stll" ,},
"1027": { "name": "abdi mohamed dek", "assignment": "0", "test": 0 , "attendance": "10" , "midexam": 24 , "final": "stll" , "total": 34 , "grade": "stll" ,},
"156": { "name": "raqib cumar kahin", "assignment": "0", "test": 0 , "attendance": "10" , "midexam": 16 , "final": "stll" , "total": 26 , "grade": "stll" ,},
"1028": { "name": "mohamed dek nur", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 20 , "final": "stll" , "total": 40 , "grade": "stll" ,},
"111": { "name": "mohamed abdinasir ali", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 12 , "final": "stll" , "total": 32 , "grade": "stll" ,},
"1029": { "name": "ahmed abdi kahin", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 8 , "final": "stll" , "total": 28 , "grade": "stll" ,},
"22": { "name": "abdiwahab abdulahi farah", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 10 , "final": "stll" , "total": 30 , "grade": "stll" ,},
"152": { "name": "rage ahmed abdulqadir", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 18 , "final": "stll" , "total": 38 , "grade": "stll" ,},
"141": { "name": "nastexo ali omer", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 12 , "final": "stll" , "total": 32 , "grade": "stll" ,},
"145": { "name": "nimco maxamud wayrax", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 10 , "final": "stll" , "total": 30 , "grade": "stll" ,},
"148": { "name": "nuur farah abdi", "assignment": "10", "test": 0 , "attendance": "10" , "midexam": 4 , "final": "stll" , "total": 24 , "grade": "stll" ,}, 
};

    const resultDiv = document.getElementById('result');
    if (results[studentID]) {
        const studentResult = results[studentID];
        resultDiv.innerHTML = `
            <h2>Natiijada Imtixaanka</h2>
          
            <img src="${studentResult.img}" alt="${studentResult.name}'s photo" width="100">
              <p><strong>Magaca:</strong> ${studentResult.name}</p> 
            <p><strong>assignmet:</strong> ${studentResult.assignment}</p>
            <p><strong>test:</strong> ${studentResult.test}</p>
            <p><strong>attendance:</strong> ${studentResult.attendance}</p>
            <p><strong>midexam:</strong> ${studentResult.midexam}</p>
            <p><strong>final:</strong> ${studentResult.final}</p>
            <p><strong>total:</strong> ${studentResult.total}</p>
            <p><strong>grade:</strong> ${studentResult.grade}</p>
            
        `;
        resultDiv.style.display = 'block';
    } else {
        resultDiv.innerHTML = '<p>Natiijo la heli karo lama hayo lambarkan.</p>';
        resultDiv.style.display = 'block';
    }
});