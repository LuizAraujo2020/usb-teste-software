// $(document).ready(function(){
//     // document.querySelector('#login-email').value = mock.email
//         localStorage.setItem('currentUser', -1);
// })

class User {
    name;
    email;
    password;
    job;
    image;
    experience;

    highlight1;
    highlight2;

    about;

    apps;

    certifications;

    github;

    contacts;
}

var mock = new User()
mock.name = "Luiz Carlos";
mock.email = "luiz@email.com";
mock.password = "password123";
mock.job = "iOS Developer";
mock.image = 'https://avatars.githubusercontent.com/u/18700326?s=96&v=4';
mock.experience = 2;
mock.highlight1 = {
    title: '5+',
    text: 'Apps publicados'
};

mock.highlight2 = {
    title: 'WWWDC 2022',
    text: 'Vencedor do Challenge'
};

mock.about = `Hello, and welcome! About me? I'm an iOS developer trying to build a better world, one line of code at a time!
<br>
<br><b>MAIN SKILLS</b>
<br>➡️ SwiftUI 
<br>➡️ UIKit 
<br>➡️ SpriteKit 
<br>➡️ Publicação em lojas Apple 
<br>➡️ Padrão MVVM
<br>➡️ Padrão MVC
<br>➡️ Design Patterns
<br>➡️ Tests
<br>➡️ Scrum 
<br>➡️ Softskills
<br>➡️ Figma
<br>
<br><b>MAIN LANGUAGES</b>
<br>➡️ Swift
<br>➡️ C
<br>➡️ Python
<br>➡️ JavaScript
<br>
<br><b>MAIN GOALS</b>
<br>➡️ Be part of a Team where I can contribute, learn and help!
<br>➡️ Achieve a consistent knowledge, to become a reference in Software Development
<br>➡️ Become better, as a Professional and as a Person! 🍃
<br>
<br>
<br>I'm from Brasilia, Brazil, born and raised. I can describe myself as determined, because I'm resilient, always trying to do the best with everything that life brings... I like to listen to music, read, and do outdoor activities. I volunteer whenever possible and I am a passionate type of person, about a lot of things. I almost died a few times and I've saved some lives, and these events have made me see life with a new perspective, now I finally feel that I am starting to understand what life is really about.
<br>
<br>I have had a few jobs, and each one has given me some important skills, and I am glad to have had these experiences. I am now more participative and communicative, for example. I am a hardworking, honest, imaginative, innovative, motivated and reliable professional. I try to be empathetic, creative, energetic, flexible, passionate, and I also try to have a good and healthy sense of humor. Furthermore, I like treating people with respect, I like helping people and I like learning new things, especially when it comes to technology. 
<br>
<br>I am currently working as a iOS Developer on a company called Eldorado, where I am being part of teams that Develop Apps and Games, natively. Also, I am a volunteer, currently I am teaching digital literacy, helping those who doesn't know how to use a computer and a smartphone, those who don't feel able to do the basic things on the internet and I am doing this because, in my humble opinion, it is one of the most present forms of exclusion and segregation, since they are afraid of the technology and the devices because they don't even know how to start learning how to use them and I realized that this makes them feel excluded, deprived of an increasingly technological world.`;
  
mock.apps = [
    {
        "image": "https://media.licdn.com/dms/image/sync/C4D27AQF04DhZmTiGjA/articleshare-shrink_800/0/1698803755088?e=1700406000&v=beta&t=tFyumMz06rGYNxDH0M1Z3pvfT1dLbLHis-8G206UMhw",
        "title": "Quest: UP!",
        "text": `The passages to the castle have been torn down and we need you to help us rebuild it!
        Organize a path, avoiding obstacles and destroying enemies, using as few items as possible to get the maximum score!`,

    },
    {
        "image": "https://media.licdn.com/dms/image/sync/C4D27AQF2dCLxo7j4XA/articleshare-shrink_800/0/1698677918256?e=1700406000&v=beta&t=ziUL_AkhlS8HKaTA0ycOq36UC-Q99XDqiUgyQbwkT44",
        "title": "Ultramarine: Infinity Dive",
        "text": `The ocean is a vast place full of mysteries, why not explore it and discover what is hidden in the depths? Your mission is, using the red submarine, to travel along the wall of rocks and enter increasingly unknown waters.`,
  
    },
    {
        "image": "https://media.licdn.com/dms/image/sync/C4D27AQFRJrWDc3BtKw/articleshare-shrink_800/0/1699717369009?e=1700406000&v=beta&t=B0yDQoytFYx8WnGBFJHA4Pv1i4jH-Ha8LvtoeinprTg",
        "title": "iBete",
        "text": `App designed to help you manage your glucose levels. With it, you can record your glucose levels as many times as necessary during the day and keep everything in the same place. Plus schedule personalized notifications to remind you when it's time to measure your glucose again.`,
    }
]

mock.certifications = [
    {
        "image": "../src/resources/scrum.png",
        "title": "Scrum Certified",
    },
    {
        "image": "https://hermes.digitalinnovation.one/certificates/cover/9E039516.jpg",
        "title": "iOS Formation (57h)",
    },
    {
        "image": "https://hermes.digitalinnovation.one/certificates/cover/D99A8ABB.jpg",
        "title": "Swift Advanced (89h)",  
    },
    {
        "image": "https://hermes.digitalinnovation.one/certificates/cover/C630077D.jpg",
        "title": "JavaScript(39h)",
    }
]

mock.github = 'LuizAraujo2020';

mock.contacts = [
    {
        "title": "luizcarlos_bsb2006@hotmail.com",
        "text": "Professional email",
    },
    {
        "title": "+55 (61) 99999-9999",
        "text": "Phone",
    }
]


var mocks = [];

mocks.push(mock);





var mockEmpty = new User()
mockEmpty.name = "Insert your Name";
mockEmpty.email = "luiz@email.com";
mockEmpty.password = "password123";
mockEmpty.job = "Insert your Job Title";
mockEmpty.image = "../src/resources/placeholder.png";
mockEmpty.experience = "?";
mockEmpty.highlight1 = {
title: '?',
text: 'Insert text'
};

mockEmpty.highlight2 = {
    title: '?',
    text: 'Insert text'
};

mockEmpty.about = `Insert a small Biography`;

mockEmpty.apps = [
    {
        "image": "./resources/placeholder.png",
        "title": "Name of the App",
        "text": `Insert a small text describin th App`,

    },
    {
        "image": "./resources/placeholder.png",
        "title": "Name of the App",
        "text": `Insert a small text describin th App`,

    },
    {
        "image": "./resources/placeholder.png",
        "title": "Name of the App",
        "text": `Insert a small text describin th App`,

    }
]

mockEmpty.certifications = [
    {
        "image": "./resources/placeholder.png",
        "title": "Name of the course",
    },
    {
        "image": "./resources/placeholder.png",
        "title": "Name of the course",
    },
    {
        "image": "./resources/placeholder.png",
        "title": "Name of the course",
    },
    {
        "image": "./resources/placeholder.png",
        "title": "Name of the course",
    },
]

mockEmpty.github = 'Git Profile';

mockEmpty.contacts = [
    {
        "title": "email@email.com",
        "text": "Professional email",
    },
    {
        "title": "Something",
        "text": "Describe this something",
    }
]