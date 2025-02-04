document.getElementById('resultForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const studentID = document.getElementById('studentID' ).value; 
    

    // Tusaale: Natiijada JSON ah
    const results = {
    "110": { "name": "Cali Cabdi miigos", "assignment": "10", "test": 19 , "attendance": "8" , "midexam": 20 , "final": 30 , "total": 80 , "grade": "A+" ,},
    "111": { "name": "warsame awyusuf bahal", "assignment": "10", "test": 25 , "attendance": "5" , "midexam": 10 , "final": 40 , "total": 99 , "grade": "A+" ,},
    "112": { "name": "maxamed axmed diiriye", "assignment": "10", "test": 25 , "attendance": "5" , "midexam": 16 , "final": 45 , "total": 99 , "grade": "A+" ,},
    "113": { "name": "shacni cali khayre", "assignment": "10", "test": 25 , "attendance": "5" , "midexam": 19 , "final": 28 , "total": 99 , "grade": "A+" ,},
    "114": { "name": "cali wardhere shiile", "assignment": "10", "test": 25 , "attendance": "5" , "midexam": 20 , "final": 10 , "total": 99 , "grade": "A+" ,},
    "115": { "name": "dahab maxamed nuur", "assignment": "10", "test": 25 , "attendance": "5" , "midexam": 15 , "final": 30 , "total": 99 , "grade": "A+" ,},
    "116": { "name": "nuur cabdi rashiid", "assignment": "9", "test": 15 , "attendance": "7" , "midexam": 10 , "final": 20 , "total": 79 , "grade": "c+" ,},
    "117": { "name": "maxamad nuur geedi", "assignment": "8", "test": 25 , "attendance": "5" , "midexam": 13 , "final": 50 , "total": 99 , "grade": "A+" ,}, 
    };

    const resultDiv = document.getElementById('result');
    if (results[studentID]) {
        const studentResult = results[studentID];
        resultDiv.innerHTML = `
            <h2>Natiijada Imtixaanka</h2>
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