import Link from 'next/link';
import Image from 'next/image'
import bread_path from '/public/bread.png'

export default function FirstPost() {
    return (
        <>
            <h1>Jenny's Page</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
            <Image 
                src={bread_path}
                width={500}
                alt="Picture of the bread"
            />
            <p>
            "Bread Barbershop" is a charming South Korean animated series that centers around the adventures of a talented barber, Master Bread, who is not just any barber—he's a slice of bread with exceptional styling skills. In his upscale salon, he transforms his bakery-based clients, such as croissants, doughnuts, and other baked goods, into masterpieces with his creative and whimsical haircuts. Each episode is filled with humor, creativity, and life lessons, making it a delightful watch for both children and adults. This series combines quirky characters and unique storytelling to explore themes of self-confidence, friendship, and the importance of community.
            </p>
        </>
    );
}