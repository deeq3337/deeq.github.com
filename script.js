/* script.js */
document.addEventListener('DOMContentLoaded', function() {
    const results = {
        "149": { 
            name: "nuur farah yusuf", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 24,
                finalExam: 32,
                total: 76,
                given: 5,
                gradePoint: 'A-'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 13,
                finalExam: 51,
                total: 84,
                given: 5,
                gradePoint: 'A'
            }
        },
        "15": { 
            name: "Abdirahman mahad garad", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 12,
                finalExam: 20,
                total: 52,
                given: 5,
                gradePoint: 'C'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 7,
                finalExam: 36,
                total: 63,
                given: 5,
                gradePoint: 'B'
            }
        },
        "17": { 
            name: "Abdirashid siyad hasan", 
            course1: {
                attendance: 8,
                assignment: 0,
                midExam: 12,
                finalExam: 18,
                total: 38,
                given: 5,
                gradePoint: 'D'
            },
            course2: {
                attendance: 8,
                assignment: 0,
                midExam: 4,
                finalExam: 27,
                total: 41,
                given: 5,
                gradePoint: 'C-'
            }
        },

        "27": { 
            name: "Absiro barre ismacil", 
            course1: {
                attendance: 5,
                assignment: 0,
                midExam: 8,
                finalExam: 18,
                total: 26,
                given: 5,
                gradePoint: 'F'
            },
            course2: {
                attendance: 5,
                assignment: 10,
                midExam: 4,
                finalExam: 21,
                total: 40,
                given: 5,
                gradePoint: 'C-'
            }
        },
        "31": { 
            name: "Ahmed shekh muhumed", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 4,
                finalExam: 6,
                total: 30,
                given: 5,
                gradePoint: 'F'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 43,
                finalExam: 21,
                total: 44,
                given: 5,
                gradePoint: 'C-'
            }
        },
        "42": { 
            name: "Ayan muhumed sahal", 
            course1: {
                attendance: 10,
                assignment: 8,
                midExam: 8,
                finalExam: 12,
                total: 38,
                given: 5,
                gradePoint: 'D'
            },
            course2: {
                attendance: 10,
                assignment: 0,
                midExam: 2,
                finalExam: 36,
                total: 48,
                given: 5,
                gradePoint: 'C'
            }
        },
        "0002": { 
            name: "cabdi dhah hassan", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 20,
                finalExam: 28,
                total: 68,
                given: 5,
                gradePoint: 'B'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 12,
                finalExam: 21,
                total: 53,
                given: 5,
                gradePoint: 'C'
            }
        },
        "13": { 
            name: "cabdinasir hassan mahamed", 
            course1: {
                attendance: 10,
                assignment: 0,
                midExam: 4,
                finalExam: 8,
                total: 22,
                given: 5,
                gradePoint: 'F'
            },
            course2: {
                attendance: 10,
                assignment: 0,
                midExam: 10,
                finalExam: 40,
                total: 53,
                given: 5,
                gradePoint: 'C'
            }
        },
        "38": { 
            name: "caisha ismacil cali", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 22,
                finalExam: 22,
                total: 64,
                given: 5,
                gradePoint: 'B-'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 0,
                finalExam: 21,
                total: 41,
                given: 5,
                gradePoint: 'C-'
            }
        },
        "39": { 
            name: "casho maxamud dubad", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 10,
                finalExam: 26,
                total: 56,
                given: 5,
                gradePoint: 'C+'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 8,
                finalExam: 42,
                total: 70,
                given: 5,
                gradePoint: 'B'
            }
        },
        "47": { 
            name: "deko abdirisak omer", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 8,
                finalExam: 32,
                total: 60,
                given: 5,
                gradePoint: 'B-'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 10,
                finalExam: 42,
                total: 72,
                given: 5,
                gradePoint: 'B+'
            }
        },
        "53": { 
            name: "faiza arab hirbe", 
            course1: {
                attendance: 5,
                assignment: 0,
                midExam: 10,
                finalExam: 20,
                total: 35,
                given: 5,
                gradePoint: 'D'
            },
            course2: {
                attendance: 10,
                assignment: 5,
                midExam: 8,
                finalExam: 36,
                total: 58,
                given: 5,
                gradePoint: 'C+'
            }
        },
        "51": { 
            name: "Farxiyo mukhtar salad", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 24,
                finalExam: 22,
                total: 66,
                given: 5,
                gradePoint: 'B'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 10,
                finalExam: 33,
                total: 63,
                given: 5,
                gradePoint: 'C+'
            }
        }, 
        "60": { 
            name: "Faysal ali abdulahi", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 6,
                finalExam: 14,
                total: 40,
                given: 5,
                gradePoint: 'C-'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 3,
                finalExam: 18,
                total: 41,
                given: 5,
                gradePoint: 'C-'
            }
        },
        "62": { 
            name: "Foos cabdile muhumed", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 22,
                finalExam: 6,
                total: 48,
                given: 5,
                gradePoint: 'C'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 0,
                finalExam: 27,
                total: 47,
                given: 5,
                gradePoint: 'C'
            }
        },
        "64": { 
            name: "hadaya husen muse", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 6,
                finalExam: 16,
                total: 42,
                given: 5,
                gradePoint: 'C-'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 10,
                finalExam: 33,
                total: 63,
                given: 5,
                gradePoint: 'C+'
            }
        },
        "73": { 
            name: "hindi mohamed barqab", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 6,
                finalExam: 18,
                total: 44,
                given: 5,
                gradePoint: 'C-'
            },
            course2: {
                attendance: 10,
                assignment: 0,
                midExam: 4,
                finalExam: 24,
                total: 38,
                given: 5,
                gradePoint: 'C-'
            }
        },
        "75": { 
            name: "ibrahim shed gedi", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 22,
                finalExam: 36,
                total: 78,
                given: 5,
                gradePoint: 'A-'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 8,
                finalExam: 40,
                total: 68,
                given: 5,
                gradePoint: 'B+'
            }
        },     
           "40": { 
            name: "istahil yarow nur", 
            course1: {
                attendance: 5,
                assignment: 0,
                midExam: 14,
                finalExam: 16,
                total: 35,
                given: 5,
                gradePoint: 'D'
            },
            course2: {
                attendance: 5,
                assignment: 10,
                midExam: 4,
                finalExam: 27,
                total: 46,
                given: 5,
                gradePoint: 'C'
            }
        },
        "84": { 
            name: "jamcale cabdi husen", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 22,
                finalExam: 10,
                total: 52,
                given: 5,
                gradePoint: 'C'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 6,
                finalExam: 42,
                total: 68,
                given: 5,
                gradePoint: 'B'
            }
        },
        "88": { 
            name: "kaho yusuf muhumed", 
            course1: {
                attendance: 5,
                assignment: 0,
                midExam: 14,
                finalExam: 14,
                total: 33,
                given: 5,
                gradePoint: 'F'
            },
            course2: {
                attendance: 5,
                assignment: 0,
                midExam: 2,
                finalExam: 33,
                total: 40,
                given: 5,
                gradePoint: 'C-'
            }
        },
        "000": { 
            name: "kawsar abdi umer", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 16,
                finalExam: 22,
                total: 58,
                given: 5,
                gradePoint: 'B'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 12,
                finalExam: 45,
                total: 77,
                given: 5,
                gradePoint: 'A-'
            }
        },
        "93": { 
            name: "kawsar abdulahi jamac", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 8,
                finalExam: 22,
                total: 50,
                given: 5,
                gradePoint: 'C'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 10,
                finalExam: 30,
                total: 60,
                given: 5,
                gradePoint: 'B-'
            }
        },
        "68": { 
            name: "hamdi abdi nur", 
            course1: {
                attendance: 10,
                assignment: 0,
                midExam: 0,
                finalExam: 30+8,
                total: 48,
                given: 5,
                gradePoint: 'C'
            },
            course2: {
                attendance: 10,
                assignment: 0,
                midExam: 0,
                finalExam: 36,
                total: 46,
                given: 5,
                gradePoint: 'C'
            }
        },
        "94": { 
            name: "kawsar mohamed abdirahman", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 22,
                finalExam: 28,
                total: 70,
                given: 5,
                gradePoint: 'B+'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 11,
                finalExam: 45,
                total: 76,
                given: 5,
                gradePoint: 'A'
            }
        },
      "86": { 
            name: "khadar mohamed hamud", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 8,
                finalExam: 22,
                total: 50,
                given: 5,
                gradePoint: 'C'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 2,
                finalExam: 21,
                total: 43,
                given: 5,
                gradePoint: 'C-'
            }
        },
      "197": { 
            name: "khadro shekh abdinur", 
            course1: {
                attendance: 0,
                assignment: 0,
                midExam: 10,
                finalExam: 16,
                total: 26,
                given: 5,
                gradePoint: 'F'
            },
            course2: {
                attendance: 0,
                assignment: 10,
                midExam: 8,
                finalExam: 33,
                total: 51,
                given: 5,
                gradePoint: 'C'
            }
        },
      "89": { 
            name: "khayro cabdulahi derow", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 16,
                finalExam: 20,
                total: 56,
                given: 5,
                gradePoint: 'C+'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 4,
                finalExam: 21,
                total: 45,
                given: 5,
                gradePoint: 'C'
            }
        },
      "98": { 
            name: "Mohamed abdi ibrahim", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 18,
                finalExam: 26,
                total: 64,
                given: 5,
                gradePoint: 'B-'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 12,
                finalExam: 30,
                total: 62,
                given: 5,
                gradePoint: 'B-'
            }
        },
      "103": { 
            name: "Mohamed ahmed diriye", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 20,
                finalExam: 26,
                total: 66,
                given: 5,
                gradePoint: 'B'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 0,
                finalExam: 33,
                total: 53,
                given: 5,
                gradePoint: 'C'
            }
        },
      "105": { 
            name: "maxamud cabdulahi hasan", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 12,
                finalExam: 18,
                total: 50,
                given: 5,
                gradePoint: 'C'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 12,
                finalExam: 27,
                total: 59,
                given: 5,
                gradePoint: 'C+'
            }
        },
      "117": { 
            name: "mahamed muhumed ali", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 16,
                finalExam: 40,
                total: 76,
                given: 5,
                gradePoint: 'A-'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 0,
                finalExam: 54,
                total: 74,
                given: 5,
                gradePoint: 'B+'
            }
        },
      "126": { 
            name: "najmo sicid cali", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 12,
                finalExam: 12,
                total: 44,
                given: 5,
                gradePoint: 'C-'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 10,
                finalExam: 27,
                total: 57,
                given: 5,
                gradePoint: 'C+'
            }
        },
      "130": { 
            name: "nasri ahmed adan", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 4,
                finalExam: 18,
                total: 42,
                given: 5,
                gradePoint: 'C-'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 6,
                finalExam: 15,
                total: 41,
                given: 5,
                gradePoint: 'C-'
            }
        },
      "129": { 
            name: "nasri rashid muhumed", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 12,
                finalExam: 18,
                total: 50,
                given: 5,
                gradePoint: 'C'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 2,
                finalExam: 24,
                total: 46,
                given: 5,
                gradePoint: 'C-'
            }
        },
      "136": { 
            name: "Nastexo cali nur", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 18,
                finalExam: 28,
                total: 66,
                given: 5,
                gradePoint: 'B-'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 14,
                finalExam: 60,
                total:  94,
                given: 5,
                gradePoint: 'A+'
            }
        },
      "138": { 
            name: "nastexo mohamed ahmed", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 18,
                finalExam: 20,
                total: 58,
                given: 5,
                gradePoint: 'C+'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 6,
                finalExam: 33,
                total: 60,
                given: 5,
                gradePoint: 'B-'
            }
        },
      "143": { 
            name: "Nimco abdirahman xasan", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 20,
                finalExam: 28,
                total: 68,
                given: 5,
                gradePoint: 'B'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 4,
                finalExam: 40,
                total: 64,
                given: 5,
                gradePoint: 'B-'
            }
        },
      "155": { 
            name: "ramlo raxeye aman", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 12,
                finalExam: 16,
                total: 48,
                given: 5,
                gradePoint: 'C'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 10,
                finalExam: 27,
                total: 57,
                given: 5,
                gradePoint: 'C+'
            }
        },
 "157": { 
            name: "ridwan cabdi muse", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 8,
                finalExam: 26,
                total: 54,
                given: 5,
                gradePoint: 'C'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 4,
                finalExam: 18,
                total: 42,
                given: 5,
                gradePoint: 'C-'
            }
        },
 "160": { 
            name: "ruman ibrahim muhumed", 
            course1: {
                attendance: 0,
                assignment: 0,
                midExam: 8,
                finalExam: 12,
                total: 20,
                given: 5,
                gradePoint: 'F'
            },
            course2: {
                attendance: 0,
                assignment: 10,
                midExam: 4,
                finalExam: 21,
                total: 35,
                given: 5,
                gradePoint: 'F'
            }
        },
 "169": { 
            name: "saytuun xasan maxamad", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 16,
                finalExam: 12,
                total: 38,
                given: 5,
                gradePoint: 'D'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 4,
                finalExam: 30,
                total: 54,
                given: 5,
                gradePoint: 'C'
            }
        },

 "74": { 
            name: "husen abdi daqane", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 4,
                finalExam: 32,
                total: 56,
                given: 5,
                gradePoint: 'C+'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 7,
                finalExam: 40,
                total: 67,
                given: 5,
                gradePoint: 'B'
            }
        },
 "83": { 
            name: "jamal muhumed farah", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 0,
                finalExam: 14,
                total: 34,
                given: 5,
                gradePoint: 'F'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 6,
                finalExam: 30,
                total: 56,
                given: 5,
                gradePoint: 'C+'
            }
        },
 "106": { 
            name: "Maqsuud cabdi jele", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 0,
                finalExam: 18,
                total: 38,
                given: 5,
                gradePoint: 'D'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 0,
                finalExam: 40,
                total: 60,
                given: 5,
                gradePoint: 'B-'
            }
        },
        "178": { 
            name: "siyad jamac ali", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 12,
                finalExam: 20,
                total: 59,
                given: 5,
                gradePoint: 'B-'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 6,
                finalExam: 27,
                total: 53,
                given: 5,
                gradePoint: 'C'
            }
        },
        "190": { 
            name: "wali hamdi duale", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 14,
                finalExam: 16,
                total: 50,
                given: 5,
                gradePoint: 'C'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 8,
                finalExam: 30,
                total: 58,
                given: 5,
                gradePoint: 'C+'
            }
        },
        
 "198": { 
    name: "cabdi mahad dek", 
    course1: {
        attendance: 10,
        assignment: 10,
        midExam: 24,
        finalExam: 44,
        total: 88,
        given: 5,
        gradePoint: 'A+'
    },
    course2: {
        attendance: 10,
        assignment: 10,
        midExam: 0,
        finalExam: 42,
        total: 62,
        given: 5,
        gradePoint: 'B-'
    }
},
"017": { 
    name: "cabdi shugri mahamad", 
    course1: {
        attendance: 10,
        assignment: 10,
        midExam: 30,
        finalExam: 44,
        total: 94,
        given: 5,
        gradePoint: 'A+'
    },
    course2: {
        attendance: 10,
        assignment: 10,
        midExam: 0,
        finalExam: 51,
        total: 71,
        given: 5,
        gradePoint: 'B+'
    }
},
"22": { 
    name: "cabdi wahab abdulahi farax", 
    course1: {
        attendance: 10,
        assignment: 10,
        midExam: 10,
        finalExam: 16,
        total: 46,
        given: 5,
        gradePoint: 'C'
    },
    course2: {
        attendance: 10,
        assignment: 0,
        midExam: 0,
        finalExam: 27,
        total: 37,
        given: 5,
        gradePoint: 'D'
    }
},
"30": { 
    name: "ahmed abdi kahin", 
    course1: {
        attendance: 10,
        assignment: 10,
        midExam: 8,
        finalExam: 10,
        total: 38,
        given: 5,
        gradePoint: 'D'
    },
    course2: {
        attendance: 10,
        assignment: 10,
        midExam: 6,
        finalExam: 42,
        total: 68,
        given: 5,
        gradePoint: 'B'
    }
},
"32": { 
    name: "amal abdulahi omer", 
    course1: {
        attendance: 10,
        assignment: 10,
        midExam: 6,
        finalExam: 32,
        total: 58,
        given: 5,
        gradePoint: 'C+'
    },
    course2: {
        attendance: 10,
        assignment: 10,
        midExam: 0,
        finalExam: 21,
        total: 41,
        given: 5,
        gradePoint: 'C-'
    }
},
"33": { 
    name: "Amal ibrahim husen", 
    course1: {
        attendance: 10,
        assignment: 10,
        midExam: 10,
        finalExam: 18,
        total: 48,
        given: 5,
        gradePoint: 'C'
    },
    course2: {
        attendance: 10,
        assignment: 10,
        midExam: 8,
        finalExam: 24,
        total: 52,
        given: 5,
        gradePoint: 'C'
    }
},
"199": { 
    name: "Aamin muhumed ismail", 
    course1: {
        attendance: 10,
        assignment: 10,
        midExam: 2,
        finalExam: 20,
        total: 42,
        given: 5,
        gradePoint: 'C-'
    },
    course2: {
        attendance: 10,
        assignment: 10,
        midExam: 12,
        finalExam: 27,
        total: 59,
        given: 5,
        gradePoint: 'B-'
    }
},
"35": { 
    name: "canabd ahmed ali", 
    course1: {
        attendance: 10,
        assignment: 10,
        midExam: 12,
        finalExam: 14,
        total: 46,
        given: 5,
        gradePoint: 'C-'
    },
    course2: {
        attendance: 10,
        assignment: 10,
        midExam: 6,
        finalExam: 27,
        total: 53,
        given: 5,
        gradePoint: 'C-'
    }
},
"58": { 
    name: "fartun cabdiqadir xasan", 
    course1: {
        attendance: 10,
        assignment: 0,
        midExam: 8,
        finalExam: 20,
        total: 38,
        given: 5,
        gradePoint: 'D'
    },
    course2: {
        attendance: 10,
        assignment: 10,
        midExam: 4,
        finalExam: 21,
        total: 45,
        given: 5,
        gradePoint: 'C'
    }
},
"76": { 
            name: "ikran abdifatah ali", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 16,
                finalExam: 22,
                total: 58,
                given: 5,
                gradePoint: 'C+'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 7,
                finalExam: 21,
                total: 49,
                given: 5,
                gradePoint: 'C'
            }
        },
"87": { 
            name: "khadar cabdi xalane", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 8,
                finalExam: 16,
                total: 44,
                given: 5,
                gradePoint: 'C-'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 0,
                finalExam: 21,
                total: 41,
                given: 5,
                gradePoint: 'C-'
            }
        },
"1001": { 
            name: "miski kahin abdirashid", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 14,
                finalExam: 18,
                total: 52,
                given: 5,
                gradePoint: 'C'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 6,
                finalExam: 18,
                total: 44,
                given: 5,
                gradePoint: 'C-'
            }
        },
"115": { 
            name: "Mohamed gure jele", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 14,
                finalExam: 14,
                total: 48,
                given: 5,
                gradePoint: 'C-'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 12,
                finalExam: 30,
                total: 62,
                given: 5,
                gradePoint: 'B-'
            }
        },
"111": { 
            name: "Mohamed abdi nasir", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 12,
                finalExam: 28,
                total: 60,
                given: 5,
                gradePoint: 'B-'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 7,
                finalExam: 42,
                total: 69,
                given: 5,
                gradePoint: 'B+'
            }
        },
"113": { 
            name: "Mohamed abdi omer", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 10,
                finalExam: 20,
                total: 50,
                given: 5,
                gradePoint: 'C'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 5,
                finalExam: 30,
                total: 55,
                given: 5,
                gradePoint: 'C+'
            }
        },
"118": { 
            name: "ohamed nur maydal", 
            course1: {
                attendance: 10,
                assignment: 0,
                midExam: 8,
                finalExam: 20,
                total: 38,
                given: 5,
                gradePoint: 'D'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 12,
                finalExam: 27,
                total: 60,
                given: 5,
                gradePoint: 'B-'
            }
        },
"120": { 
            name: "Muno ismail serar", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 12,
                finalExam: 14,
                total: 46,
                given: 5,
                gradePoint: 'C'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 12,
                finalExam: 40,
                total: 72,
                given: 5,
                gradePoint: 'B+'
            }
        },
"123": { 
            name: "nadifo moalim keyd", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 2,
                finalExam: 28,
                total: 50,
                given: 5,
                gradePoint: 'C'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 2,
                finalExam: 30,
                total: 52,
                given: 5,
                gradePoint: 'C'
            }
        },
"125": { 
            name: "Najmo mahamud dubad", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 30,
                finalExam: 30,
                total: 80,
                given: 5,
                gradePoint: 'A-'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 9,
                finalExam: 36,
                total: 65,
                given: 5,
                gradePoint: 'B'
            }
        },
"135": { 
            name: "Nastexo cabdi duwane", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 16,
                finalExam: 10,
                total: 46,
                given: 5,
                gradePoint: 'C'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 12,
                finalExam: 30,
                total: 62,
                given: 5,
                gradePoint: 'C+'
            }
        },
"133": { 
            name: "Nastexo cabdiraxman ali", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 4,
                finalExam: 18,
                total: 42,
                given: 5,
                gradePoint: 'C'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 3,
                finalExam: 40,
                total: 63,
                given: 5,
                gradePoint: 'B-'
            }
        },
"141": { 
            name: "nastexo cali cumar", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 12,
                finalExam: 12,
                total: 44,
                given: 5,
                gradePoint: 'C-'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 12,
                finalExam: 30,
                total: 62,
                given: 5,
                gradePoint: 'B-'
            }
        },
"140": { 
            name: "nastexo yusuf cumar", 
            course1: {
                attendance: 10,
                assignment: 0,
                midExam: 18,
                finalExam: 20,
                total: 48,
                given: 5,
                gradePoint: 'C'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 6,
                finalExam: 33,
                total: 59,
                given: 5,
                gradePoint: 'C+'
            }
        },
"144": { 
            name: "nimco cabdulahi mahamud", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 12,
                finalExam: 26,
                total: 56,
                given: 5,
                gradePoint: 'C+'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 7,
                finalExam: 36,
                total: 63,
                given: 5,
                gradePoint: 'B-'
            }
        },
"146": { 
            name: "Nimco cumar kahin", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 16,
                finalExam: 16,
                total: 52,
                given: 5,
                gradePoint: 'C'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 4,
                finalExam: 48,
                total: 72,
                given: 5,
                gradePoint: 'B+'
            }
        },
"145": { 
            name: "nimco maxamuud wayrax", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 10,
                finalExam: 14,
                total: 44,
                given: 5,
                gradePoint: 'C-'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 4,
                finalExam: 15,
                total: 39,
                given: 5,
                gradePoint: 'D'
            }
        },
"150": { 
            name: "Nuurto muhumed abdulahi", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 12,
                finalExam: 10,
                total: 42,
                given: 5,
                gradePoint: 'C-'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 8,
                finalExam: 30,
                total: 58,
                given: 5,
                gradePoint: 'C+'
            }
        },
"148": { 
            name: "nur farah abdi", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 4,
                finalExam: 12,
                total: 36,
                given: 5,
                gradePoint: 'D'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 6,
                finalExam: 27,
                total: 53,
                given: 5,
                gradePoint: 'C'
            }
        },
"152": { 
            name: "rage ahmed abdulqadir", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 18,
                finalExam: 34,
                total: 72,
                given: 5,
                gradePoint: 'B+'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 12,
                finalExam: 30,
                total: 62,
                given: 5,
                gradePoint: 'B-'
            }
        },
"156": { 
            name: "Raqib omer kahin", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 16,
                finalExam: 12,
                total: 48,
                given: 5,
                gradePoint: 'C'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 7,
                finalExam: 33,
                total: 60,
                given: 5,
                gradePoint: 'B-'
            }
        },
"159": { 
            name: "rodo mawlid muse", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 8,
                finalExam: 12,
                total: 40,
                given: 5,
                gradePoint: 'C-'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 12,
                finalExam: 21,
                total: 53,
                given: 5,
                gradePoint: 'C'
            }
        },
"158": { 
            name: "rodo husen hasan", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 12,
                finalExam: 16,
                total: 48,
                given: 5,
                gradePoint: 'C'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 12,
                finalExam: 51,
                total: 83,
                given: 5,
                gradePoint: 'A'
            }
        },
"162": { 
            name: "sacdiyo muhumed adan", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 0,
                finalExam: 16,
                total: 36,
                given: 5,
                gradePoint: 'D'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 0,
                finalExam: 33,
                total: 53,
                given: 5,
                gradePoint: 'C'
            }
        },
"165": { 
            name: "sahro mahad sahal", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 8,
                finalExam: 18,
                total: 46,
                given: 5,
                gradePoint: 'C'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 6,
                finalExam: 21,
                total: 47,
                given: 5,
                gradePoint: 'C'
            }
        },
"168": { 
            name: "saredo mohamed omer", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 22,
                finalExam: 30,
                total: 72,
                given: 5,
                gradePoint: 'B+'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 10,
                finalExam: 36,
                total: 66,
                given: 5,
                gradePoint: 'B+'
            }
        },
"170": { 
            name: "Shakir ahmed hared", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 12,
                finalExam: 22,
                total: 54,
                given: 5,
                gradePoint: 'C'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 0,
                finalExam: 50,
                total: 70,
                given: 5,
                gradePoint: 'B+'
            }
        },
"171": { 
            name: "Shamso jele korar", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 10,
                finalExam: 38,
                total: 68,
                given: 5,
                gradePoint: 'B'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 4,
                finalExam: 27,
                total: 51,
                given: 5,
                gradePoint: 'C'
            }
        },
"174": { 
            name: "Shukri cabdirashid nur", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 10,
                finalExam: 18,
                total: 48,
                given: 5,
                gradePoint: 'C'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 8,
                finalExam: 33,
                total: 61,
                given: 5,
                gradePoint: 'B-'
            }
        },
"179": { 
            name: "Siyaado cabdi dhimbil", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 14,
                finalExam: 18,
                total: 52,
                given: 5,
                gradePoint: 'C'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 11,
                finalExam: 27,
                total: 58,
                given: 5,
                gradePoint: 'C+'
            }
        },
"180": { 
            name: "Sucdi cabdi diriye", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam:10,
                finalExam: 20,
                total: 5,
                given: 5,
                gradePoint: 'C'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 7,
                finalExam: 24,
                total: 51,
                given: 5,
                gradePoint: 'C'
            }
        },
"183": { 
            name: "sumayo ahmed abdulahi", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 8,
                finalExam: 16,
                total: 44,
                given: 5,
                gradePoint: 'C-'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 4,
                finalExam: 27,
                total: 51,
                given: 5,
                gradePoint: 'C'
            }
        },
"187": { 
            name: "Sundus mohamed osman", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 20,
                finalExam: 30,
                total: 70,
                given: 5,
                gradePoint: 'B+'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 7,
                finalExam: 30,
                total: 57,
                given: 5,
                gradePoint: 'C+'
            }
        },
"188": { 
            name: "ubax shafi muhumed", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 10,
                finalExam: 10,
                total: 40,
                given: 5,
                gradePoint: 'C-'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 0,
                finalExam: 33,
                total: 58,
                given: 5,
                gradePoint: 'C'
            }
        },
"189": { 
            name: "wali cabdi nur ", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 12,
                finalExam: 36,
                total: 68,
                given: 5,
                gradePoint: 'B'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 7,
                finalExam: 15,
                total: 42,
                given: 5,
                gradePoint: 'C'
            }
        },
"200": { 
            name: "xareed cabdulahi cabdi", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 24,
                finalExam: 36,
                total: 80,
                given: 5,
                gradePoint: 'A'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 12,
                finalExam: 65,
                total: 97,
                given: 5,
                gradePoint: 'A+'
            }
        },
"107": { 
            name: "yasmin jele korar", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 8,
                finalExam: 46,
                total: 74,
                given: 5,
                gradePoint: 'B+'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 9,
                finalExam: 51,
                total: 80,
                given: 5,
                gradePoint: 'A'
            }
        },
"196": { 
            name: "yasmin shugri guhad", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 10,
                finalExam: 22,
                total: 54,
                given: 5,
                gradePoint: 'C'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 7,
                finalExam: 15,
                total: 42,
                given: 5,
                gradePoint: 'C-'
            }
        },
"177": { 
            name: "samran cabdulqadir derow", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 10,
                finalExam: 36,
                total: 66,
                given: 5,
                gradePoint: 'B'
            },
            course2: {
                attendance: 10,
                assignment: 10,
                midExam: 6,
                finalExam: 63,
                total: 90,
                given: 5,
                gradePoint: 'A+'
            }
        },
"10": { 
            name: "Abdifatah muhumed mukhtar", 
            course1: {
                attendance: 10,
                assignment: 10,
                midExam: 6,
                finalExam: 10,
                total: 36,
                given: 5,
                   
                gradePoint: 'D'
            },
            course2: {
                attendance:  10,
                assignment:  10,
                midExam:  7,
                finalExam:  30,
                total: 57,
                given: 5,
                gradePoint: 'C+'
            }
        },
    };

    const searchButton = document.getElementById('searchButton');
    const studentIdInput = document.getElementById('studentId');
    const resultsArea = document.getElementById('resultsArea');
    const studentNameDisplay = document.getElementById('studentName'); // Add this line

    searchButton.addEventListener('click', function() {
        const studentId = studentIdInput.value;
        if (results[studentId]) {
            const studentName = results[studentId].name; // Get student name
            studentNameDisplay.textContent = `Student Name: ${studentName}`; // Display name
            populateResults('course1', results[studentId].course1);
            populateResults('course2', results[studentId].course2);
            resultsArea.style.display = 'flex';
        } else {
            alert('Student ID not found.');
            resultsArea.style.display = 'none';
            studentNameDisplay.textContent = ""; // Clear the name display
        }
    });

    function populateResults(courseId, data) {
        const list = document.getElementById(courseId + '-list');
        list.innerHTML = ''; // Clear previous results
        for (const key in data) {
            const listItem = document.createElement('li');
            listItem.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${data[key]}`;
            list.appendChild(listItem);
        }
    }
});
