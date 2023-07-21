import React from "react";
import styles from "./Filter.module.scss";
import Sort from "../Sort";

import { ReactComponent as GenderIcon } from "../../images/gender.svg";

const Filter = () => {
    const listOfVariants = ["Мужской", "Женский"];
    return (
        <div className={styles.filter}>
            <Sort
                leftIcon={GenderIcon}
                sortingAspect={"Пол"}
                listOfVariants={listOfVariants}
            />
            <Sort
                leftIcon={GenderIcon}
                sortingAspect={"Просмотры"}
                listOfVariants={[
                    "0-100.000 тыс",
                    "10.000-100.000тыс",
                    "200000-300000тыс",
                    "300000-500000тыс",
                ]}
            />
            <Sort
                leftIcon={GenderIcon}
                sortingAspect={"Возраст"}
                listOfVariants={[
                    "0-10 лет",
                    "10-14 лет",
                    "14-18 лет",
                    "18-25 лет",
                ]}
            />
        </div>
    );
};

export default Filter;
