import React from "react";
import "./Modal.css";
import { useState, useEffect } from "react";
import logo from "../../images/1.png";
import logo1 from "../../images/num1.png";
import logo2 from "../../images/num2.png";
import logo3 from "../../images/num3.png";
import checkbox from "../../images/checkbox.png";
import logo2_act from "../../images/num2_act.png";
import logo_file from "../../images/file-text-svgrepo-com.png";
import logo3_act from "../../images/num3__active.png";

const Modal = ({ active, setActive, children }) => {
    const [drag, setDrag] = useState(false);
    const [comment, setComment] = React.useState("");
    const [file, setFile] = React.useState("");
    const [name, setName] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [information, setInformation] = React.useState("");
    const [input, setInput] = React.useState(false);
    const [inputValue, setInputValue] = useState("");
    let initialState = [
        "Транспорт",
        "Мода",
        "Юмор",
        "Образование",
        "Развлечения",
        "Кулинария",
        "Игры",
    ];
    const [tags, setTags] = useState(initialState);

    const [currentStep, setCurrentStep] = useState(0);

    const handlePrevClick = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleNextClick = () => {
        if (currentStep < 2) {
            setCurrentStep(currentStep + 1);
        }
    };

    function dragStartHandler(e) {
        e.preventDefault();
        setDrag(true);
    }

    function dragLeaveHandler(e) {
        e.preventDefault();
        setDrag(false);
    }

    function onDropHandler(e) {
        e.preventDefault();
        let files = [...e.dataTransfer.files];
        setFile(files[0]);
        const formData = new FormData();
        formData.append("file", files[0]);
        // axios.post("url", formData);

        setDrag(false);
    }
    function handleClick() {
        tags.push(inputValue);
        setTags(tags);
        console.log(tags);
    }

    let displayContent = (currentStep) => {
        switch (currentStep) {
            case 0:
                return (
                    <>
                        <div>
                            <div className="header">
                                <img src={logo1} className="logo-icon" />

                                <div className="step-font bold">Проверка</div>
                                <img src={logo} className="logo-step" />
                                <img src={logo2} className="logo-inactive" />
                                <div className="step-font">Комментарий</div>
                                <img src={logo} className="logo-step" />
                                <img src={logo3} className="logo-inactive" />

                                <div className="step-font">Контакты</div>
                            </div>
                        </div>
                        <div className="content">
                            <div className="text">
                                <div>Указанные теги</div>
                                <div className="plus-svg">
                                    <svg
                                        onClick={() => setInput(!input)}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g
                                            id="SVGRepo_bgCarrier"
                                            strokeWidth="0"
                                        ></g>
                                        <g
                                            id="SVGRepo_tracerCarrier"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></g>
                                        <g id="SVGRepo_iconCarrier">
                                            {" "}
                                            <rect
                                                width="24"
                                                height="24"
                                                fill="white"
                                            ></rect>{" "}
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9V11H9C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13H11V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V13H15C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11H13V9ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
                                                fill="#3375B2"
                                                id="asd"
                                            ></path>{" "}
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            {input && (
                                <>
                                    <div className="search_box">
                                        <input
                                            onChange={(e) => {
                                                setInputValue(e.target.value);
                                            }}
                                            value={inputValue}
                                            className="search_input"
                                            type="text"
                                            placeholder="Введите тег..."
                                        />
                                        <button
                                            className="add_button"
                                            onClick={handleClick}
                                        >
                                            Добавить
                                        </button>
                                    </div>
                                    <div></div>
                                </>
                            )}
                            <div className="tags">
                                {tags.map(function (item, index, array) {
                                    return <div className="tag">{item}</div>;
                                })}
                            </div>
                        </div>

                        <div className="content">
                            <div className="text">
                                <div className="fix">Указанные фильтры</div>
                            </div>
                            <div className="filters">
                                <div className="filter">
                                    <div className="filter-name">Пол</div>
                                    <div className="filter-pol">Женский</div>
                                </div>
                                <div className="filter">
                                    <div className="filter-name">Просмотры</div>
                                    <div className="filter-prosm">
                                        200.000-500.000 тыс
                                    </div>
                                </div>
                                <div className="filter">
                                    <div className="filter-name">Возраст</div>
                                    <div className="filter-vozr">18-25 лет</div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-modal">
                            <button
                                className="prev-button"
                                onClick={() => handlePrevClick()}
                            >
                                НАЗАД
                            </button>
                            <button
                                className="next-button"
                                onClick={() => handleNextClick()}
                            >
                                ПРОДОЛЖИТЬ
                            </button>
                        </div>
                    </>
                );
            case 1:
                return (
                    <>
                        <div>
                            <div className="header">
                                <img src={checkbox} className="logo-icon" />
                                <div className="step-font bold">Проверка</div>
                                <img src={logo} className="logo-step" />
                                <img src={logo2_act} className="logo-active" />
                                <div className="step-font bold">
                                    Комментарий
                                </div>
                                <img src={logo} className="logo-step" />
                                <img src={logo3} className="logo-inactive" />

                                <div className="step-font">Контакты</div>
                            </div>
                        </div>
                        <div className="content">
                            <div className="text">
                                <div>Укажите комментарий к заказу</div>
                            </div>
                            <div className="input">
                                <input
                                    type="comment"
                                    id="comment"
                                    placeholder="Чтобы вы хотели уточнить?"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="content">
                            <div className="text">
                                <div>Загрузите рекламное видео</div>
                            </div>
                            <div id="boxA" draggable="true">
                                {drag ? (
                                    <div
                                        className="drop-area__active"
                                        onDragStart={(e) => dragStartHandler(e)}
                                        onDragLeave={(e) => dragLeaveHandler(e)}
                                        onDragOver={(e) => dragStartHandler(e)}
                                        onDrop={(e) => onDropHandler(e)}
                                    >
                                        <div>
                                            Отпустите файлы, чтобы загрузить их
                                        </div>
                                    </div>
                                ) : (
                                    <div
                                        onDragStart={(e) => dragStartHandler(e)}
                                        onDragLeave={(e) => dragLeaveHandler(e)}
                                        onDragOver={(e) => dragStartHandler(e)}
                                        className="drop-area"
                                    >
                                        <div>Перенесите файлы</div>
                                    </div>
                                )}
                            </div>
                            {file === "" ? (
                                <div></div>
                            ) : (
                                <div className="file-container">
                                    <img
                                        src={logo_file}
                                        className="logo-file"
                                    />
                                    <div className="file-name">{file.name}</div>
                                </div>
                            )}
                        </div>
                        <div className="footer-modal-step2">
                            <button
                                className="prev-button"
                                onClick={() => handlePrevClick()}
                            >
                                НАЗАД
                            </button>
                            <button
                                className="next-button"
                                onClick={() => handleNextClick()}
                            >
                                ПРОДОЛЖИТЬ
                            </button>
                        </div>
                    </>
                );
            case 2:
                return (
                    <>
                        <div>
                            <div className="header">
                                <img src={checkbox} className="logo-icon" />

                                <div className="step-font bold">Проверка</div>
                                <img src={logo} className="logo-step" />
                                <img src={checkbox} className="logo-fix" />
                                <div className="step-font bold">
                                    Комментарий
                                </div>
                                <img src={logo} className="logo-step" />
                                <img src={logo3_act} className="logo-active" />

                                <div className="step-font bold">Контакты</div>
                            </div>
                        </div>
                        <div className="content">
                            <div className="text">
                                <div>Имя</div>
                            </div>
                            <div className="input">
                                <input
                                    type="name"
                                    id="name"
                                    placeholder="Как к вам обращаться?"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="content">
                            <div className="text">
                                <div>Телефон</div>
                            </div>
                            <div className="input">
                                <input
                                    type="phone"
                                    id="phone"
                                    placeholder="8(800)-555-35-35"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="content">
                            <div className="text">
                                <div>E-mail</div>
                            </div>
                            <div className="email">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="ivanov@gmail.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="content">
                            <div className="text">
                                <div>Дополнительная информация</div>
                            </div>
                            <div className="input">
                                <input
                                    type="comment"
                                    id="comment"
                                    placeholder="Любая информация о вас"
                                    value={information}
                                    onChange={(e) =>
                                        setInformation(e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        <div className="footer-modal">
                            <button
                                className="prev-button"
                                onClick={() => handlePrevClick()}
                            >
                                НАЗАД
                            </button>
                            <button
                                className="next-button"
                                onClick={() => handleNextClick()}
                            >
                                ПРОДОЛЖИТЬ
                            </button>
                        </div>
                    </>
                );
        }
    };

    return (
        <div
            className={active ? "modal active" : "modal"}
            onClick={() => setActive(false)}
        >
            <div
                className={active ? "modal__content active" : "modal__content"}
                onClick={(e) => e.stopPropagation()}
            >
                {displayContent(currentStep)}
            </div>
        </div>
    );
};

export default Modal;
