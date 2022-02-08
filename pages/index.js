import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Search from "../components/Search";
import { SliderData } from "../components/SliderData";

export default function Home() {
    return (
        <>
            <Nav />
            {/* <Hero slides={SliderData} /> */}
            <Search />
        </>
    );
}
