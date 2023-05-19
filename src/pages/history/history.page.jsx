import { useState } from 'react'

import { HistoryDataTableComponent } from '../../components/datatable/history-datatable.component'
import styled from 'styled-components'

import { RequestReviewComponent } from '../../components/request-review/request-review.component'

const HistoryPageContainer = styled.div`
    width: 90vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`



export const HistoryPage = () => {

    return (
        <HistoryPageContainer>
            <h1>History</h1>
            <HistoryDataTableComponent />
            
        </HistoryPageContainer>
    )
}

