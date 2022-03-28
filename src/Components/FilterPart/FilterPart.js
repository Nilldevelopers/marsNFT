import './FilterPart.css'
import i1 from './img/image_1.png'
import i2 from './img/image_2.png'
import i3 from './img/image_3.png'
import i4 from './img/image_4.png'
import i5 from './img/image_5.png'
import i6 from './img/image_6.png'
import i7 from './img/image_7.png'
import i8 from './img/image_8.png'
import i9 from './img/image_9.png'
import i10 from './img/image_10.png'
import i11 from './img/image_11.png'
import i12 from './img/image_12.png'
import i13 from './img/image_13.png'
import i14 from './img/image_14.png'
import i15 from './img/image_15.png'


import ic1 from './img/icon/i1.png'
import ic2 from './img/icon/i2.png'
import ic3 from './img/icon/i3.png'
import ic4 from './img/icon/i4.png'
import ic5 from './img/icon/i5.png'
import ic6 from './img/icon/i6.png'
import ic7 from './img/icon/i7.png'
import ic8 from './img/icon/i8.png'
import ic9 from './img/icon/i9.png'
import ic10 from './img/icon/i10.png'
import ic11 from './img/icon/i11.png'
import ic12 from './img/icon/i12.png'
import ic13 from './img/icon/i13.png'
import ic14 from './img/icon/i14.png'
import ic15 from './img/icon/i15.png'


import paint from './img/icon/paint.png'
import sortbar from './img/icon/sortbar.png'
import soul from './img/icon/soul.png'
import threedots from './img/icon/threedots.png'
import game from './img/icon/game.png'
import exir from './img/icon/exir.png'
import cam from './img/icon/camera.png'
import all from './img/icon/all.png'
import React, {useState, useEffect} from "react";
import EmptyBtn from "../Button/EmptyBtn";


const portfolio = [
    {
        id: 1,
        category: ["all", "frontend", "ux-ui"],
        img_source: i1,
        contact_img: ic1,
        property: "1.21 ETH",
        username: "The man in the tent",
        img_alt: "lorem"
    },
    {
        id: 2,
        category: ["all", "mobile", "ux-ui"],
        img_source: i2,
        contact_img: ic2,
        property: "0.98 ETH",
        username: "Your hat is full of balls",
        img_alt: "lorem"
    },
    {
        id: 3,
        category: ["all", "frontend"],
        img_source: i3,
        contact_img: ic3,
        property: "1.00 ETH",
        username: "Shameless sculpture",
        img_alt: "lorem"
    },
    {
        id: 4,
        category: ["all", "frontend", "ux-ui"],
        img_source: i4,
        contact_img: ic4,
        property: "0.28 ETH",
        username: "Hands on silver head",
        img_alt: "lorem"
    },
    {
        id: 5,
        category: ["all", "others"],
        img_source: i5,
        contact_img: ic5,
        property: "1.89 ETH",
        username: "Employee astronaut",
        img_alt: "lorem"
    },
    {
        id: 6,
        category: ["all", "others"],
        img_source: i6,
        contact_img: ic6,
        property: "5.69 ETH",
        username: "Thoughtful woman",
        img_alt: "lorem"
    }, {
        id: 7,
        category: ["all", "frontend", "ux-ui"],
        img_source: i6,
        contact_img: ic6,
        property: "0.03 ETH",
        username: "Bisexual winged",
        img_alt: "lorem"
    },
    {
        id: 8,
        category: ["all", "mobile", "ux-ui"],
        img_source: i7,
        contact_img: ic7,
        property: "1.01 ETH",
        username: "Snake the glass",
        img_alt: "lorem"
    },
    {
        id: 9,
        category: ["all", "frontend"],
        img_source: i8,
        contact_img: ic8,
        property: "1.69 ETH",
        username: "Pink Runner Man #5",
        img_alt: "lorem"
    },
    {
        id: 10,
        category: ["all", "frontend", "ux-ui"],
        img_source: i9,
        contact_img: ic9,
        property: "9.31 ETH",
        username: "Purple Hypnotist",
        img_alt: "lorem"
    },
    {
        id: 11,
        category: ["all", "others"],
        img_source: i10,
        contact_img: ic10,
        property: "289.6 ETH",
        username: "How much cry?",
        img_alt: "lorem"
    },
    {
        id: 12,
        category: ["all", "others"],
        img_source: i11,
        contact_img: ic11,
        property: "8.90 ETH",
        username: "Three bald leopards",
        img_alt: "lorem"
    }
];


function TurnOn(active) {
    return ('active_filter')
}

const FilterBtn = [
    {
        id: 0,
        Filtering: "all",
        logo: all,
        name: "All categories"
    }, {
        id: 1,
        Filtering: "frontend",
        logo: paint,
        name: "Art"
    }, {
        id: 2,
        Filtering: "mobile",
        logo: exir,
        name: "Collectibles"
    }, {
        id: 3,
        Filtering: "ux-ui",
        logo: cam,
        name: "Photography"
    }, {
        id: 4,
        Filtering: "others",
        logo: game,
        name: "Game"
    }]

const FilterPart = () => {
    const [filter, setFilter] = useState("all");
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0)


    useEffect(() => {
        setProjects(portfolio);
    }, []);

    useEffect(() => {
        setProjects([]);
        const filtered = portfolio.map(p => ({
            ...p,
            filtered: p.category.includes(filter)
        }));
        setProjects(filtered);
    }, [filter]);


    return (
        <>
            <div className="container">
                <div className="d-flex flex-column flex-wrap align-items-center">
                    <div className="portfolio__labels">
                        {
                            FilterBtn.map((expense, index) => (

                                    <a href="/#"
                                       key={index}
                                       className={active === expense.id ? TurnOn(active) : null}
                                       active={filter === expense.Filtering}
                                       onClick={() => {
                                           setActive(expense.id);
                                           setFilter(expense.Filtering)
                                       }}>
                                        <div className="d-flex flex-row align-items-center">
                                            <div className="my_margin">
                                                <img src={expense.logo} alt=""/>
                                            </div>
                                            <span>
                                    {expense.name}
                                </span>
                                        </div>
                                    </a>


                            ))
                        }
                        <div>
                            <button className="filter-btn">
                               <div className="d-flex flex-row align-items-center">
                                   <div className="my_margin">
                                       <img src={sortbar} alt=""/>
                                   </div>
                                   <span>
                                    Recently added
                                </span>
                               </div>
                            </button>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            {projects.map(item =>
                                item.filtered === true ?
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 pb-5">
                                        <div className="border_class filter_items">
                                            <span key={item.id}
                                            >
                                                <div
                                                    className="d-flex flex-row justify-content-between align-items-center p-3">
                                                    <img className="img-fluid" src={item.contact_img} alt=""/>
                                                <img src={threedots} alt={item.img_alt}/>
                                                </div>
                                                <img className="img-fluid width_100" src={item.img_source} alt=""/>
                                               <div className="p-3">
                                                    <p className="text-white">
                                                    {item.username}
                                                </p>
                                                <span>{item.property}</span>
                                               </div>
                                            </span>
                                        </div>
                                    </div> : ""
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FilterPart;
