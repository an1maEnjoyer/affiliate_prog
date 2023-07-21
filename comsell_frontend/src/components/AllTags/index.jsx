import React from "react";
import Search from "../Search";
import Tag from "../Tag";
import styles from "./AllTags.module.scss";
import { useState } from "react";

function AllTags({
    tags,
    onTagClick,
    searchValue,
    setSearchValue,
    setModalActive,
}) {
    return (
        <section className={styles.all_tags_container}>
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
            <h2>Все теги</h2>
            <div className={styles.all_tags}>
                {tags.map((item, index) => (
                    <Tag
                        key={index}
                        title={item}
                        onClick={() => onTagClick(item)}
                    />
                ))}
            </div>
            <button
                className={styles.open_btn}
                onClick={() => setModalActive(true)}
            >
                Оформить заказ
            </button>
        </section>
    );
}

export default AllTags;
