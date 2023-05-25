import React, { useState } from 'react'

import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardGroup,
    CCardHeader,
    CCardImage,
    CCardLink,
    CCardSubtitle,
    CCardText,
    CCardTitle,
    CListGroup,
    CListGroupItem,
    CNav,
    CNavItem,
    CNavLink,
    CCol,
    CRow,

    CFormInput,
    CFormLabel,
    CFormFloating,
    CFormSelect,
    CFormTextarea,
} from '@coreui/react'

import ReactImg from 'src/assets/images/react.jpg'

import { Elimination } from 'src/services/Vmix/Callbacks/Elimination.ts'
import { LoadInGameGT, UnLoadInGameGT } from 'src/services/Vmix/GTs/GTs.ts'

import { ELIMINATION as ELIMINATION_GT } from "src/services/Vmix/GTs/Settings/ELIMINATION";
import { Overlay } from 'src/services/Vmix/Shortcuts/Functions/Overlay';
import { InGameGT } from "src/configs/InGameGT";

import Data from 'src/configs/Data'

var GTCard_Active = false;

export async function PlayDeadAlive(ELIMS, RANK, TEAM_NAME) {
    const GT_Setting = new ELIMINATION_GT();

    while (GTCard_Active)
        await new Promise((resolve) => setTimeout(resolve, 100))

    GTCard_Active = true;

    await LoadInGameGT(Data.InGamePath + "\\ELIMINATION.gtzip");

    GT_Setting.SetText(GT_Setting.Text.ELIMS, ELIMS);
    GT_Setting.SetText(GT_Setting.Text.RANK, RANK);
    GT_Setting.SetText(GT_Setting.Text.TEAM_NAME, TEAM_NAME);

    const transition = new Overlay();
    await transition.FadeInOut(GT_Setting)
    await UnLoadInGameGT("ELIMINATION.gtzip");

    GTCard_Active = false;
}

export function DeadAlive_GT_Card() {
    const GT_Name = "DEAD ALIVE"
    const GT = new ELIMINATION_GT();
    const GT_TEXTS = [GT.Text.ELIMS, GT.Text.RANK, GT.Text.TEAM_NAME]
    const [texts, setTexts] = useState(GT_TEXTS);

    const OnTextChange = (key, value) => {
        console.log("Text key: " + key + " Value: " + value)
        let NewText = texts;
        NewText[key] = value;
        setTexts(NewText)
    }

    async function OnShowClicked() {
        PlayDeadAlive(texts[GT.Text.ELIMS], texts[GT.Text.RANK], texts[GT.Text.TEAM_NAME])
    }

    async function OnHideClicked() {
        await UnLoadInGameGT("ELIMINATION.gtzip");
        GTCard_Active = false;
    }

    return (
        <CCol sm={4}>
            <CCardBody>
                <CCard style={{ width: '18rem' }}>
                    <CCardImage orientation="top" src={ReactImg} />
                    <CCardBody>
                        <CCardTitle>{GT_Name}</CCardTitle>
                    </CCardBody>
                    <CListGroup flush>
                        {texts.map(input => (
                            <CFormFloating key="1" className="mb-3">
                                <CFormInput id="floatingInput" onInput={e => OnTextChange(input, e.target.value)} placeholder="value" />
                                <CFormLabel htmlFor="floatingInput">{input}</CFormLabel>
                            </CFormFloating>
                        ))}
                    </CListGroup>
                    <CCardBody className="align-items-center mb-3">
                        <CRow className="align-items-center mb-3">
                            <CCol xs>
                                <CButton onClick={OnShowClicked}>Play</CButton>
                            </CCol>
                        </CRow>
                    </CCardBody>
                </CCard>
            </CCardBody>
        </CCol>
    );
}