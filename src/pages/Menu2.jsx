import React from 'react'


const Menu2 = () => {
return (
    <>
        <div className='encabezado'><h1>Menú</h1></div>
        <div className='menu'>
        <div className='encabezado parte_izquierda'>
            <h3>Desayunos</h3>
            <p>- Desayuno Completo. (Incluye yogurth con cereal, agua del día, café de olla y chilaquiles rojos ó verdes) <strong>$180</strong></p>
            <p>- Omelette de Espinaca con Queso de Cabra <strong>$150</strong></p>
            <p>- Omelette de Hongos con Quesillo <strong>$150</strong></p>
            <p>- Omelette de Huitlacoche <strong>$150</strong></p>
            <p>- Omelette de Jamón con Quesillo <strong>$150</strong></p>
            <p>- Chilaquiles con Pollo o Huevo (Verdes o Rojos) <strong>$150</strong>. Con extra de huevo <strong>+$25</strong>, con extra de cecina <strong>+$60</strong>, con extra de pollo <strong>+$50</strong>, con extra de chorizo <strong>+$30</strong></p>
            <p>- Fruta de Temporada <strong>$75</strong></p>
            <p>- Pan Tostado con Mantequilla y Mermelada <strong>$45</strong></p>
            <p>- Huevos Rancheros <strong>$150</strong></p>
            <p>- Huevos con Mole Poblano <strong>$150</strong></p>
            <p>- Huevos a la Mexicana <strong>$150</strong></p>
            <img className='xolo' src='images/xoloitzcuintle.jpg'/>
            <h3>Entradas</h3>
            <p>- Guacamole <strong>$220</strong></p>
            <p>- Nachos con Carne <strong>$280</strong></p>
            <p>- Tlacoyos (Orden de 3pz) <strong>$90</strong>. Con pollo <strong>+$50</strong>, con cecina <strong>+$60</strong>, con arrachera <strong>+$80</strong></p>
            <p>- Sopes (Orden de 3pz) <strong>$60</strong>. Con pollo <strong>+$50</strong>, con cecina <strong>+$60</strong>, con arrachera <strong>+$80</strong></p>
            <p>- Quesadilla de Queso <strong>$110</strong></p>
            <p>- Sope con Tuetano <strong>$160</strong></p>
            <p>- Queso Fundido <strong>$180</strong><br/> Con arrachera <strong>$240</strong>, con champiñones <strong>$220</strong>, con chorizo <strong>$220</strong></p><hr/>
            <h3>Platillos</h3>
            <p>- Molcajete Mar y Tierra. (Frijoles rancheros, arrachera, camarones, queso hecho por chinicuil, chorizo, nopales, cebollines, chile serrano y tortillas hechas a mano 6pz) Extra de tortillas 6pz <strong>+$25.  </strong> <strong>$720</strong></p>
            <p>- Hamburguesa Chinicuil (Pollo, chilaquiles rojos, crema, queso, cebolla y huevo estrellado) <strong>$180</strong></p>
            <p>- Hamburguesa 3 Quesos (Carne de filete de res, tocino, queso mozzarella, queso chihuahua, queso oaxaca, portobello, jitomate, lechuga, cebolla y camote frito) <strong>$240</strong></p>
            <p>- Pollo Entero Estilo Hidalgo. (En penca de Maguey con adobo y nopales) <strong>$450</strong></p>
            <p>- Pollo con Mole Poblano o Mole Verde <strong>$240</strong></p>
            <p>- Pollo Asado Chinicuil <strong>$220</strong></p>
            <p>- Enchiladas (Verdes o rojas). <strong>$180</strong></p>
            <p>- Enmoladas <strong>$180</strong></p>
            <p>- Camarones al Axiote <strong>$350</strong></p>
            <p>- Camarones al Ajillo <strong>$350</strong></p>
            <p>- Arrachera Chinicuil <strong>$350</strong></p>
            <p>- Fajitas de Pollo con Queso <strong>$240</strong></p>
            <p>- Fajitas de Arrachera con Queso <strong>$280</strong></p>
            <p>- Ensalada de Frutos Rojos. (Con queso de cabra, vinagreta de jamaica y nuez caramelizada) <strong>$200</strong><br/> Con pollo <strong>$240</strong>, con arrachera <strong>$260</strong>, con camarones <strong>$290</strong></p>
            <img className='xolo' src='images/ensalada.jpg'/>
            <p>- Taco de Cecina <strong>$45</strong></p>
            <p>- Taco de Arrachera <strong>$45</strong></p>
            <p>- Tacos MiGober (Orden de 3 tacos. Tacos de camaron) <strong>$240</strong></p>
            <p>- Tacos CeciKamp (Orden de 3 tacos. Cecina, camaron, bombones de aguacate y chile serrano) <strong>$180</strong></p>
            <p>- Tostada de Aguachile Verde (1pz) <strong>$95</strong></p>
            <p>- Quesadilla de Pollo <strong>$150</strong></p>
            <p>- Queso Fresco Asado (Acompañado de tortillas hechas a mano y a elegir: champiñones, huitlacoche ó espinaca) <strong>$160</strong></p>
            <p>- Chamorro al Horno <strong>$280</strong></p>
            <p>- Caldo de Pollo <strong>$100</strong></p>
            <p>- Sopa de Tortilla <strong>$130</strong></p>
            <p>- Sopa del Día <strong>$130</strong></p>
            <img className='xolo' src='images/agave.jpg'/>
            <h3>Vegano</h3>
            <p>- Quesadilla de Hongos <strong>$110</strong></p>
            <p>- Quesadilla de Huitlacoche <strong>$130</strong></p>
            <p>- Tostadas de Flor de Jamaica <strong>$120</strong></p>
            <p>- Flautas de Papa <strong>$120</strong></p>
            <p>- Enchiladas Rellenas de Hongos (Verdes o Rojas) <strong>$180</strong></p><hr/>
            <h3>Todos los Jueves y los Viernes</h3>
            <p>- Pozole <strong>$180</strong></p>
            <img src='images/gusano-hoja.WEBP'/><hr/>
            <h3>Todos los Sábados y Domingos</h3>
            <p>- Taco de Barbacoa <strong>$45</strong></p>
            <p>- Taco de Barbacoa en Salsa Verde con Nopales <strong>$55</strong></p>
            <p>- Chilaquiles con Barbacoa <strong>$180</strong></p>
            <p>- Taco de Pancita <strong>$55</strong></p>
            <p>- Flautas de Barbacoa (Orden de 3pz) <strong>$150</strong></p>
            <p>- Quesadilla de Barbacoa <strong>$150</strong></p>
            <p>- Consome con carne <strong>$90</strong></p>
            <p>- Consome sin carne <strong>$55</strong></p>
            <img className='xolo bw' src='images/barbacoa2.jpg'/>
            <h3>Bebidas</h3>
            <p>- Café de Olla <strong>$45</strong></p>
            <p>- Café Americano <strong>$60</strong></p>
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
            <p>- Cerveza Victoria <strong>$50</strong></p>
            <p>- Vaso Chelado <strong>$20</strong></p>
            <p>- Vaso Michelado Sabores (Clásica Chamoy, Sandía, Mango, Mora Azul, Tamarindo o Flaming) <strong>$35</strong></p>
            <p>- Ojo Rojo <strong>$30</strong></p>
            <img className='xolo bw' src='images/cantarito.WEBP'/>
            <h3>Cocteles</h3>
            <p>- MARGARITA <strong>$150</strong></p>
            <p>- MEZCALITA (Tuna, Frutos Rojos, Jamaica, Naranja, Especias) <strong>$220</strong></p>
            <p>- MOJITO <strong>$150</strong></p>
            <p>- CANTARITO <strong>$150</strong></p>
            <p>- TEQUILA SUNRISE <strong>$150</strong></p>
            <p>- PIÑA COLADA <strong>$150</strong></p>
            <p>- GIN TONIC <strong>$180</strong></p>
            <p>- GIN TONIC FRUTOS ROJOS <strong>$180</strong></p>
            <p>- CARAJILLO <strong>$220</strong></p>
            <p>- SAMBUCA <strong>$250</strong></p>
            <h3>Licores</h3>
            <p>- Amaretto <strong>$280</strong></p>
            <p>- Licor del 43 <strong>$200</strong></p>
            <h3>Tequila</h3>
            <p>- Don Julio reposado <strong>$200</strong></p>
            <p>- Mestro Dobel <strong>$220</strong></p>
            <p>- Herradura Ultra <strong>$250</strong></p>
            <p>- Patrón Silver <strong>$260</strong></p>
            <p>- José Cuervo Especial <strong>$180</strong></p>
            <img className='xolo bw' src='images/chinicuil-foto.jpg'/>
            <h3>Mezcal</h3>
            <p>- Etereo Espadín<strong>$180</strong></p>
            <p>- 400 Conejos joven<strong>$180</strong></p>
            <p>- Amarás<strong>$180</strong></p>
            <p>- Fandango Blanco<strong>$140</strong></p><hr/>
            <h3>Ginebra</h3>
            <p>- Tanqueray Ten <strong>$250</strong></p>
            <p>- Bombay <strong>$250</strong></p>
            <img src='images/gusano-feliz.jpg'/>
            <h3>Whisky</h3>
            <p>- Buchanan´s 12 <strong>$200</strong></p>
            <p>- Macallan 12 <strong>$300</strong></p><hr/>
            <h3>Meet Malix</h3>
            <img className='xolox' src='images/malix1.jpeg'/>
            <img className='xolox' src='images/malix2.jpeg'/>
            <img className='xolox' src='images/malix3.jpeg'/>
            <img className='xolox' src='images/malix4.jpeg'/><hr/>
            <img className='insta' src='images/instagram.png'/>
            <a href={'https://www.instagram.com/chinicuil.holbox/'} className='chin'>
            @chinicuil.holbox *click here!*
            </a><br/>
            <img className='insta' src='images/star-png.webp'/>
            <a href={'https://www.google.com/search?q=chinicuil+holbox&oq=chinicuil+holbox&aqs=chrome.0.0i355i512j46i175i199i512j69i60l2.3217j0j4&sourceid=chrome&ie=UTF-8#lrd=0x8f4d93b6b28fc8a3:0x28a8d8f6cf1f195b,3,,,'} className='chin'>
            ¡Danos Tu Opinión! *click here!*
            </a>
            </div>
            </div>
        </>
)
}

export default Menu2