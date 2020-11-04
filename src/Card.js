import React from 'react'
import "./App.css"

const Card = () => {
    return (
        <div className="row row-cols-1 row-cols-md-4">
            <div className="col mb-4">
                <div className="card h-100">
                    <div className="p-0 mb-0 bg-primary text-white">Определение группы крови
                        <p>Чек-лист</p>
                    </div>
                    <img src="https://im0-tub-ru.yandex.net/i?id=cc237485d67b918edadc208bfadad969&n=13" className="card-img-top" alt="" />
                    <div className="card-body">
                        <h9 className="card-title">Название группы | Название рублики</h9>
                        <svg id={'ll'} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chat-left-text"
                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M14 1H2a1 1 0 0 0-1 1v11.586l2-2A2 2 0 0 1 4.414 11H14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                            <path fill-rule="evenodd"
                                  d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        <svg id={'ll'} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-star-fill"
                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-camera"
                            fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M15 12V6a1 1 0 0 0-1-1h-1.172a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 9.173 3H6.828a1 1 0 0 0-.707.293l-.828.828A3 3 0 0 1 3.172 5H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
                            <path fill-rule="evenodd"
                                  d="M8 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                            <path d="M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                        </svg>
                        <div>
                            <h6><strong>32 пункта</strong></h6>
                            <h4>1 800 секунд 35 000 баллов </h4>
                            <div className={'box'}>
                                <div className="card-text">Автор: Иванов Иван</div>
                                <div>Утвердил: Иванов Иван</div>
                            </div>
                        </div>
                        <div className={'box'}>
                            <div className="card-text">Создано:1.11.2020</div>
                            <div>Утверждено:1.11.2020</div>
                        </div>
                        </div>
                </div>
            </div>

            <div className="col mb-4">
                <div className="card h-100">
                    <div className="p-0 mb-0 bg-primary text-white">Определение группы крови
                        <p>Чек-лист</p>
                    </div>
                    <img src="https://im0-tub-ru.yandex.net/i?id=cc237485d67b918edadc208bfadad969&n=13" className="card-img-top" alt="" />
                    <div className="card-body">
                        <h9 className="card-title">Название группы | Название рублики</h9>
                        <svg id={'ll'} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chat-left-text"
                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M14 1H2a1 1 0 0 0-1 1v11.586l2-2A2 2 0 0 1 4.414 11H14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                            <path fill-rule="evenodd"
                                  d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        <svg id={'ll'} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-star-fill"
                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-camera"
                            fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M15 12V6a1 1 0 0 0-1-1h-1.172a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 9.173 3H6.828a1 1 0 0 0-.707.293l-.828.828A3 3 0 0 1 3.172 5H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
                            <path fill-rule="evenodd"
                                  d="M8 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                            <path d="M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                        </svg>
                        <div>
                            <h6><strong>32 пункта</strong></h6>
                            <h4>1 800 секунд 35 000 баллов </h4>
                            <div className={'box'}>
                                <div className="card-text">Автор: Иванов Иван</div>
                                <div>Утвердил: Иванов Иван</div>
                            </div>
                        </div>
                        <div className={'box'}>
                            <div className="card-text">Создано:1.11.2020</div>
                            <div>Утверждено:1.11.2020</div>
                        </div>
                    </div>

                    </div>
            </div>


                <div className="col mb-4">
                     <div className="card h-100">
                       <div className="p-0 mb-0 bg-primary text-white">Определение группы крови
                           <p>Чек-лист</p>
                       </div>
                         <img src="https://im0-tub-ru.yandex.net/i?id=cc237485d67b918edadc208bfadad969&n=13" className="card-img-top" alt="" />
                         <div className="card-body">
                             <h9 className="card-title">Название группы | Название рублики</h9>
                             <svg id={'ll'} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chat-left-text"
                                  fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                 <path fill-rule="evenodd"
                                       d="M14 1H2a1 1 0 0 0-1 1v11.586l2-2A2 2 0 0 1 4.414 11H14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                 <path fill-rule="evenodd"
                                       d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                             </svg>
                             <svg id={'ll'} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-star-fill"
                                  fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                 <path
                                     d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                             </svg>
                             <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-camera"
                                  fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                 <path fill-rule="evenodd"
                                       d="M15 12V6a1 1 0 0 0-1-1h-1.172a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 9.173 3H6.828a1 1 0 0 0-.707.293l-.828.828A3 3 0 0 1 3.172 5H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
                                 <path fill-rule="evenodd"
                                       d="M8 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                 <path d="M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                             </svg>
                             <div>
                                 <h6><strong>32 пункта</strong></h6>
                                 <h4>1 800 секунд 35 000 баллов </h4>
                                 <div className={'box'}>
                                     <div className="card-text">Автор: Иванов Иван</div>
                                     <div>Утвердил: Иванов Иван</div>
                                 </div>
                             </div>
                             <div className={'box'}>
                                 <div className="card-text">Создано:1.11.2020</div>
                                 <div>Утверждено:1.11.2020</div>
                             </div>
                         </div>
                </div>
            </div>

            <div className="col mb-4">
                <div className="card h-100">
                        <div className="p-0 mb-0 bg-primary text-white">Определение группы крови
                            <p>Чек-лист</p>
                        </div>
                    <img src="https://im0-tub-ru.yandex.net/i?id=cc237485d67b918edadc208bfadad969&n=13" className="card-img-top" alt="" />
                        <div className="card-body">
                            <h9 className="card-title">Название группы | Название рублики</h9>
                            <svg id={'ll'} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chat-left-text"
                                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M14 1H2a1 1 0 0 0-1 1v11.586l2-2A2 2 0 0 1 4.414 11H14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                <path fill-rule="evenodd"
                                      d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                            <svg id={'ll'} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-star-fill"
                                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-camera"
                                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M15 12V6a1 1 0 0 0-1-1h-1.172a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 9.173 3H6.828a1 1 0 0 0-.707.293l-.828.828A3 3 0 0 1 3.172 5H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
                                <path fill-rule="evenodd"
                                      d="M8 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                <path d="M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                            </svg>
                            <div>
                                <h6><strong>32 пункта</strong></h6>
                                <h4>1 800 секунд 35 000 баллов </h4>
                                <div className={'box'}>
                                   <div className="card-text">Автор: Иванов Иван</div>
                                   <div>Утвердил: Иванов Иван</div>
                                </div>
                            </div>
                            <div className={'box'}>
                                <div className="card-text">Создано:1.11.2020</div>
                                <div>Утверждено:1.11.2020</div>
                            </div>

                      </div>
                </div>
            </div>
     </div>

  )
};

export default Card;
