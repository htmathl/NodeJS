const express = require('express')
const exphbs = require('express-handlebars')
const axios = require('axios')

const app = express()

//chave de API
const OPENWEATHER_API_KEY = 'a52f9ebac8e8b97545cb5bd330305e8b'

//Configs Handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//Configs arqs estáticos
app.use(express.static('public'))

//Middleware para interpretar requisições POST
app.use(express.urlencoded({ extended: true }))

//Rota principal
app.get('/', (req, res) => {
    res.render('home')
})

app.post('/weather', async(req, res) => {
    const city = req.body.city

    if( !city ) {
        return res.render( 'home' , { error: "Insira uma cidade válida" } )
    }
    
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}&units=metric&lang=pt_br`
        )

        const weatherData = response.data
        const weatherInfo = {
            city: weatherData.name,
            temperature: weatherData.main.temp,
            description: weatherData.weather[0].description,
            icon: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
        }

        res.render('home', { weatherInfo })

    } catch(error) {
        res.render('home', { error: 'Não foi possível obter a previsão para esta cidade.' })
    }
})

//Porta
const PORT = 3000

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
