# Frontend-applikation med användarhantering
En enkelt frontend-applikation där användaren kan läsa inlägg och genom att skapa ett konto och logga in, kan skriva egna anonyma inlägg. Den använder HTML, 
JavaScript, Parcel och SASS (SCSS), samt är kopplad till en RESTful webbtjänst. API:et erhåller data genom MongoDB som en dokumentdatabas (se [CV API](https://moment4-backend.onrender.com/api/posts) och [API repo](https://github.com/rare2400/Moment4.1) ). 

## Funktioner
- Lista befintliga inlägg
- Lägga till nya inlägg 
- Registrera användarkonto
- Logga in på eget konto
- Se privata uppgifter (användarnamn & e-mail)
- SCSS för förbättrad struktur av CSS
- Kommunicerar med API via `fetch`:
```js
async function fetchPosts() {
    try {
        const response = await fetch(url)

        if (response.ok) {
            const data = await response.json();
            displayPosts(data);
        }
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}
```

## Verktyg
- HTML5
- JavaScript
- Parcel
- SASS/SCSS
- REST-webbtjänst (eget API)

## Installation
1. **Klona repot:**
```bash
git clone https://github.com/rare2400/Moment4.2.git
cd Moment4.2
```

2. **Installera paket:**
```bash
npm install
```

3. **starta utvecklingsserver:**
```bash
npm run start
```

4. **Applikation körs på** `http://localhost:1234`

## Bygga för produktion
```bash
npm run build
```

## Skapad av
Skapad som en del av en skolupppgift   
Mittuniversitetet, Webbutvecklingsprogrammet    
Ramona Reinholdz      
[rare2400@student.miun.se](rare2400@student.miun.se)      
2025-08-12
