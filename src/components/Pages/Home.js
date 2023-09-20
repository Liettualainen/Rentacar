import logonew from 'images/logonew.jpg';
import getstarted from 'images/getstarted.png';

import {
    HomeMain, HomeText, HomeHeaderText, HomeTextBottom,
    HomeHeaderBottom
} from "../Styled/Home.styled";
export default function Home() {

    return (
        <HomeMain>
            <img src={logonew} alt="car"></img><br />
            <HomeHeaderText>An Easier, Safer & More Reliable Way To Rent a Car.
            </HomeHeaderText>

            <HomeText>Your advantages as a buyer as a dealer, car recycler or garage with registered trade you can buy
                all kinds of accident vehicles on WOM auction platform and benefit from various features:
                Daily changing stock of up to 2000 damaged vehicles. Vehicles of all kinds and in all conditions - cars, trucks,
                motorcycles, special vehicles, total loss, slightly damaged and many more Intuitive search and filter options as well
                as Watchlist
                for interesting vehicles available vehicles and bargain vehicles with high chance of winning Smooth purchase
                processing through fully digitalized processes and the WOM service teamLower transport costs through regional
                offersAvailable in 5 languages: German, English, Polish, Ukrainian, Romanian. Multi-bid function for the submission
                of several bids simultaneously. Online bid status for highest, current and pending bidsOptional email notifications on
                new vehicles,
                highest bids, updates and moreQuick registration via document upload function
            </HomeText>
       
        
            <img src={getstarted} alt="car"></img>

     
            <HomeHeaderBottom>ABOUT CARSFORRENT.COM®
            </HomeHeaderBottom>

            <HomeTextBottom>
                For over 20 years, Carsforsale.com® has simply been one of the fastest and easiest ways to
                rent new and used cars online. With millions of vehicles listed from thousands of
                State-Verified Auto Dealers nationwide, finding your perfect vehicle is a snap. Our goal
                has always been to make the car buying experience better, faster and more fun! Rental for
                your next vehicle on Carsforrents.com® is as easy as search, click and done! Rent thousands of new
                and used cars.
            </HomeTextBottom>
        </HomeMain>
  )
}