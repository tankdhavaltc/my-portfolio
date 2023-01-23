import React, { useEffect, useState } from 'react'
import "./style.css";
import Title from "../../Utilities/Title/Title";
import { projects } from '../../API/projects';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabItem from '../../Utilities/Tabs/TabItem';

const Portfolio = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        let cate = new Set(projects.map((project, index) => project.category))
        let arr = new Array(...cate);
        arr.unshift("all");
        setCategories(arr);
    }, []);
    
    return (
        <div className="container">
            <section id='portfolio'>
                <Title name="portfolio" />
                <p className="text-center mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dicta voluptatem modi laborum deserunt! Adipisci enim magni quos temporibus amet sunt praesentium minus et ullam velit veniam quas autem deserunt animi, doloremque sint nam corporis sapiente mollitia in numquam voluptatem. Ipsam dolor at tenetur rem, atque mollitia! Quae, ratione beatae!</p>
                <div className="tabs">
                    <Tabs>
                        <TabList>
                            {categories !== null && categories?.map((item, index) => {
                                return <Tab key={index}>{item}</Tab>
                            })}
                        </TabList>
                        {categories !== null && categories?.map((cate, index) => {
                            return (<TabPanel key={index}>
                                {projects.map((item, index) => {
                                    if (cate === "all")
                                        return <TabItem key={index} item={item} />
                                    else if (item.category === cate)
                                        return <TabItem key={index} item={item} />
                                    return null;
                                })}
                            </TabPanel>)
                        })}
                    </Tabs>
                </div>
            </section>
        </div>
    )
}

export default Portfolio