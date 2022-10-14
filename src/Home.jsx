import Header from "./components/Header";

const Home = () => {
    return ( 
        <div className="main">
            <Header />
            <div className="container">

                <div className="left">
                    <div className="slider_button">
                        <img src="../images/slider_button.png" alt="button" />
                        <img src="../images/slider_button.png" alt="button" />
                        <img src="../images/slider_button.png" alt="button" />
                    </div>
                    <div className="text_container">
                        <h2>ზუმერული NFT ბოლო ზარი</h2>
                        <p>ეს არის პლატფორმა, რომლის დახმარებითაც შენი ბოლო ზარის პერანგის ზურგის ნახატს NFT ART-ად გადავაქცევთ და სამუდამოდ შეგინახავთ ციფრულ სამყაროში.</p>
                        <div className="text_innerContainer">
                            <span>როგორ?</span>
                            <p>უბრალოდ გადაუღე ფოტო (ნორმალური ფოტო!) შენი ბოლო ზარის პერანგის ART-ს, ატვირთე ჩვენთან და გააენეფტე, რას ელოდები?.. იქნებ სკოლის დამთავრება სამახსოვრო საჩუქრითაც აღნიშნო…</p>
                        </div>
                    </div>
                </div>
                <div className="middle">
                    <div className="gagvecani">
                        <img src="../images/gagvecani.png" alt="gagvecani" />
                    </div>
                    <form>
                        <div className="input">
                            <span>სახელი</span>
                            <input type="text"/>
                        </div>
                        <div className="input">
                            <span>სახელი</span>
                            <input type="text"/>
                        </div>
                        <div className="input">
                            <span>სახელი</span>
                            <input type="text"/>
                        </div>
                        <div className="input">
                            <span>სახელი</span>
                            <input type="text"/>
                        </div>
                        <div className="input">
                            <span>სახელი</span>
                            <input type="text"/>
                        </div>
                    </form>
                </div>
                <div className="right">

                </div>
            </div>
        </div>
     );
}
 
export default Home;