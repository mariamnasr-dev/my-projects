var quotes =[
    { q: 'Be yourself; everyone else is already taken.' ,
     author:'― Oscar Wilde'
    } , 
    { q: 'So many books, so little time.' ,
     author:'-Frank Zappa'
    } ,
    { q: 'A room without books is like a body without a soul.' ,
     author:'-Marcus Tullius Cicero'
    } ,
    { q: 'You only live once, but if you do it right, once is enough.' ,
     author:'-Mae West'
    } ,
    { q: 'Be the change that you wish to see in the world.' ,
     author:'-Mahatma Gandhi'
    } ,
    { q: 'If you tell the truth, you donخt have to remember anything.' ,
     author:'-Mark Twain'
    } ,
    { q: 'A friend is someone who knows all about you and still loves you.' ,
     author:'-Elbert Hubbard'
    }
]


function generateQuote() {
    var random =Math.floor(Math.random() * 5);
    document.getElementById("Quote").innerHTML = quotes[random].q
    document.getElementById("auther").innerHTML = quotes[random].author
}



