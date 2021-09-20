import React from 'react';
import './App.css';
import Button from "./components/Button";
import Product from "./components/Product";
import Tile from "./components/Tile";
import handbag1 from './assets/bag_1.png';
import handbag2 from './assets/bag_2.png';
import handbag3 from './assets/bag_3.png';
import handbag4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png'

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    placeholder="to the collection"
                    disabled={false}/>
                <Button
                    placeholder="shop all bags"
                    disabled={false}/>
                <Button
                    placeholder="pre-orders"
                    disabled={true}/>
            </nav>
            <main>
                <Product
                    label="Best seller"
                    image={handbag1}
                    name="The handy bag"
                    price="€400,-"
                />
                <Product
                    label="Best seller"
                    image={handbag2}
                    name="The stylish bag"
                    price="€250,-"
                />
                <Product
                    label="Best seller"
                    image={handbag3}
                    name="The simple bag"
                    price="€300,-"
                />
                <Product
                    label="Best seller"
                    image={handbag4}
                    name="The trendy bag"
                    price="€400,-"
                />
            </main>
            <footer>
                <Tile
                    title='THE BRAND'
                    text1='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur blanditiis doloribus eius ex facere fuga in laudantium obcaecati placeat quasi?'
                    text2='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur blanditiis doloribus eius ex facere fuga in laudantium obcaecati placeat quasi?'
                />
                <Tile
                    image={brand}
                    alternative='brand'
                />
                <Tile
                    image={our_story}
                    alternative='our story'
                />
                <Tile
                    title='OUR STORY'
                    text1='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consectetur dolores
                        explicabo iure non quas sint? Est eum itaque minus perferendis quo quos, recusandae, sapiente
                        similique suscipit, totam unde voluptatum.'

                />

            </footer>
        </>
    );
}

export default App;



