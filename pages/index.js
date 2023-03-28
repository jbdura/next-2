import fs from 'fs/promises' 
import path from 'path'
import Link from 'next/link'

function HomePage(props) {
    const { products } = props;

    return (
        <ul>
            {/* <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li> */}
            {products.map((product) => (
                <li key={product.id}>
                    <Link href={`/${product.id}`}>{product.title}</Link>
                </li>
            ))}
        </ul>
    )
}

export async function getStaticProps() {

    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData)

    return { props: {
        products: data.products  
    } }
}


export default HomePage;
    