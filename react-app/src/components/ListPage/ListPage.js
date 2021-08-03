import './ListPage.css'

const ListPage = () => {

    return (
        <>
            <div className='background2'>
                <div className='container'>
                    <div className='list-side-info'>
                    </div>
                    <div className='lists'>
                        <div className='list-header'>
                            <h3>Completed</h3>
                        </div>
                        <div className='list-section'>
                            <div className='list-head-row'>
                                <div className='list-title'>
                                Title 
                                </div>
                                <div className='list-score'>
                                Score
                                </div>
                            </div>
                            <div className='list-entry-row'>
                                <div className='list-entry-cover'>
                                    <div className='list-entry-img'>

                                    </div>
                                </div>
                                <div className='list-entry-title'>
                                    <a>
                                        Shingeki no Kyojin
                                    </a>
                                </div>
                                <div className='list-entry-score'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListPage;