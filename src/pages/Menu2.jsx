import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu2 = () => {
return (
    <>
        <div className='encabezado'><h1>Menú</h1></div>
        <div className='menu'>
        <div className='encabezado parte_izquierda'>
            <h3>Desayunos</h3>
            <p>- Desayuno Completo <strong>$180</strong>. (Incluye yogurth con cereal, jugo de temporada, café de olla y huevos al gusto ó chilaquiles ó flautas de pollo/papa)</p>
            <p>- Omelette de Espinaca con Queso de Cabra <strong>$150</strong></p>
            <p>- Omelette de Hongos con Quesillo <strong>$150</strong></p>
            <p>- Omelette de Huitlacoche <strong>$150</strong></p>
            <p>- Omelette de Jamón con Quesillo <strong>$150</strong></p>
            <p>- Chilaquiles con Pollo o Huevo (Verdes o Rojos) <strong>$150</strong>. Con extra de huevo <strong>+$25</strong>, con extra de cecina <strong>+$60</strong>, con extra de pollo <strong>+$50</strong>, con extra de chorizo <strong>+$30</strong></p>
            <p>- Fruta de Temporada <strong>$75</strong></p>
            <p>- Huevos Rancheros <strong>$150</strong></p>
            <p>- Huevos con Mole Poblano <strong>$150</strong></p>
            <p>- Huevos a la Mexicana <strong>$150</strong></p>
            <img className='xolo' src='images/xoloitzcuintle.jpg'></img>
            <h3>Entradas</h3>
            <p>- Guacamole <strong>$220</strong></p>
            <p>- Nachos con Carne <strong>$280</strong></p><hr/>
            <h3>Platillos</h3>
            <p>- Molcajete Mar y Tierra. (Frijoles rancheros, arrachera, camarones, queso hecho por chinicuil, chorizo, nopales, cebollines, chile serrano y tortillas hechas a mano 6pz) Extra de tortillas 6pz <strong>+$25.  </strong> <strong>$720</strong></p>
            <p>- Pollo Entero Estilo Hidalgo. (En penca de Maguey con adobo y nopales) <strong>$450</strong></p>
            <p>- Pollo con Mole Poblano o Mole Verde <strong>$240</strong></p>
            <p>- Pollo Asado Chinicuil <strong>$220</strong></p>
            <p>- Camarones al Axiote <strong>$350</strong></p>
            <p>- Camarones al Ajillo <strong>$350</strong></p>
            <p>- Arrachera Chinicuil <strong>$350</strong></p>
            <p>- Tlacoyos (Orden de 3pz) <strong>$60</strong>. Con pollo <strong>+$50</strong>, con cecina <strong>+$60</strong>, con arrachera <strong>+$80</strong></p>
            <p>- Sopes (Orden de 3pz) <strong>$90</strong>. Con pollo <strong>+$50</strong>, con cecina <strong>+$60</strong>, con arrachera <strong>+$80</strong></p>
            <p>- Taco de Cecina <strong>$45</strong></p>
            <p>- Taco de Arrachera <strong>$65</strong></p>
            <p>- Caldo de Pollo <strong>$100</strong></p>
            <p>- Sopa de Tortilla <strong>$130</strong></p>
            <p>- Sopa del Día <strong>$130</strong></p>
            <img className='xolo' src='images/agave.jpg'></img>
            <h3>Vegano</h3>
            <p>- Quesadilla de Hongos <strong>$110</strong></p>
            <p>- Quesadilla de Huitlacoche <strong>$130</strong></p>
            <p>- Tostadas de Flor de Jamaica <strong>$120</strong></p>
            <p>- Flautas de Papa <strong>$120</strong></p><hr/>
            <h3>Todos los Jueves</h3>
            <p>- Pozole <strong>$180</strong></p>
            <img src='images/gusano-hoja.WEBP'></img><hr/>
            <h3>Todos los Sábados y Domingos</h3>
            <p>- Tacos de Barbacoa <strong>$45</strong></p>
            <p>- Tacos de Pancita <strong>$55</strong></p>
            <p>- Flautas de Barbacoa (Orden de 3pz) <strong>$150</strong></p>
            <p>- Quesadillas de Barbacoa <strong>$140</strong></p>
            <p>- Consome con carne <strong>$90</strong></p>
            <p>- Consome sin carne <strong>$50</strong></p>
            <img className='xolo bw' src='images/barbacoa2.jpg'></img>
            <h3>Bebidas</h3>
            <p>- Agua del Día <strong>$45</strong></p>
            <p>- Boing <strong>$45</strong></p>
            <p>- Jugo Verde <strong>$90</strong></p>
            <p>- Coca Cola <strong>$45</strong></p><hr/>
            <h4>Cervezas</h4>
            <p>- Corona <strong>$50</strong></p>
            <p>- Pacífico <strong>$50</strong></p>
            <p>- Montejo <strong>$50</strong></p>
            <p>- Negra Modelo <strong>$60</strong></p>
            <p>- Modelo Especial <strong>$60</strong></p>
            <img className='xolo bw' src='images/cantarito.WEBP'></img>
            <h3>Cocteles</h3>
            <p>- MARGARITA <strong>$150</strong></p>
            <p>- MEZCALITA <strong>$220</strong></p>
            <p>- MOJITO <strong>$150</strong></p>
            <p>- CANTARITO <strong>$150</strong></p><hr/>
            <h3>Tequila</h3>
            <p>- Don Julio reposado <strong>$200</strong></p>
            <p>- Mestro Dobel <strong>$220</strong></p>
            <p>- Herradura Ultra <strong>$250</strong></p>
            <p>- Patrón Silver <strong>$260</strong></p>
            <p>- José Cuervo Especial <strong>$180</strong></p>
            <img className='xolo bw' src='images/chinicuil-foto.jpg'></img>
            <h3>Mezcal</h3>
            <p>- La Kuka Espadín <strong>$180</strong></p><hr/>
            <h3>Ginebra</h3>
            <p>- Tanqueray Ten <strong>$250</strong></p>
            <p>- Bombay <strong>$250</strong></p>
            <img src='images/gusano-feliz.jpg'></img>
            <h3>Whisky</h3>
            <p>- Buchanan´s 12 <strong>$200</strong></p>
            <p>- Macallan 12 <strong>$300</strong></p><hr/>
            <>
            <img className='insta' src='images/instagram.png'>
            </img>
            <a href={'https://www.instagram.com/chinicuil.holbox/'} className='chin'>
            @chinicuil.holbox
            </a><br/>
            <img className='insta' src='images/star-png.webp'></img>
            <a href={'https://www.google.com/search?q=chinicuil+holbox&oq=chinicuil+holbox&aqs=chrome.0.0i355i512j46i175i199i512j69i60l2.3217j0j4&sourceid=chrome&ie=UTF-8#lrd=0x8f4d93b6b28fc8a3:0x28a8d8f6cf1f195b,3,,,'} className='chin'>
            ¡Danos Tu Opinión! 
            </a>
            </>
            </div>
            </div>
        </>
)
}

export default Menu2