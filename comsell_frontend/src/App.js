import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import AllTags from "./components/AllTags";
import Filter from "./components/Filter";
import Header from "./components/Header";
import SelectedTags from "./components/SelectedTags";
import Modal from "./components/Modal";

function App() {
    const [modalActive, setModalActive] = useState(false);
    const [allTags, setAllTags] = useState([
        "Транспорт",
        "Мода",
        "Юмор",
        "Образование",
        "Развлечения",
        "Кулинария",
        "Игры",
        "Хобби",
        "Музыка",
        "Спорт",
        "Путешествия",
        "Животные",
        "Новости и политика",
        "Люди и блоги",
        "Общественная деятельность",
        "Стиль",
    ]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/api/tag/getAll"
                );
                setAllTags(response.data);
            } catch (error) {
                console.error("Ошибка при получении данных:", error);
            }
        };

        fetchData();
    }, []);
    const handleTagClick = (tag) => {
        if (allTags.includes(tag)) {
            setAllTags(allTags.filter((t) => t !== tag));
            setSelectedTags([...selectedTags, tag]);
        } else {
            setSelectedTags(selectedTags.filter((t) => t !== tag));
            setAllTags([...allTags, tag]);
        }
    };
    const allTagsFiltred = allTags.filter((item) => {
        console.log(item);
        if (
            item.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
        ) {
            return true;
        } else return false;
    });
    console.log(allTagsFiltred);
    return (
        <div className="App">
            <div className="circle"></div>
            <Header />
            <main>
                <div className="left_side">
                    <SelectedTags
                        tags={selectedTags}
                        onTagClick={handleTagClick}
                    />
                    <AllTags
                        tags={allTagsFiltred}
                        onTagClick={handleTagClick}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        setModalActive={setModalActive}
                    />
                </div>

                <section className="rigth_side">
                    <h3>Фильтры</h3>
                    <Filter />
                </section>
            </main>
            <Modal active={modalActive} setActive={setModalActive} />
        </div>
    );
}

export default App;
