const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {

    await saveOrphanage(db, {
        lat: "-25.3961846",
        lng: "-49.3265087",
        name: "Lar das meninas",
        about: "Presta assistencia a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "41984088420",
        image: [
            "https://images.unsplash.com/photo-1603138461768-be254fb9a9ee?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1594007184512-2a607d1df588?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horario de visita Das 8h as 18h",
        open_on_weekends: "1"
    })

    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage)

    console.log(await db.run("DELETE FROM orphanages WHERE id ='1'"));

})