import React, { useState } from 'react'

import PropTypes from 'prop-types';

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
import { DocsExample } from 'src/components'

import ReactImg from 'src/assets/images/react.jpg'

import { Elimination } from 'src/services/Vmix/Callbacks/Elimination.ts'
import { LoadInGameGT, UnLoadInGameGT } from 'src/services/Vmix/GTs/GTs.ts'

import { ELIMINATION as ELIMINATION_GT } from "src/services/Vmix/GTs/Settings/ELIMINATION";
import { Overlay } from 'src/services/Vmix/Shortcuts/Functions/Overlay';
import { InGameGT } from "src/configs/InGameGT";

var InGamePath = ""
var GTCard_Active = false;

function GT_Card({ GT_Name, GT_TEXTS, GT_Setting }) {

  const [texts, setTexts] = useState(GT_TEXTS);

  const OnTextChange = (key, value) => {
    console.log("Text key: " + key + " Value: " + value)
    let NewText = texts;
    NewText[key] = value;
    setTexts(NewText)
  }

  async function OnShowClicked() {
    while (GTCard_Active)
      await new Promise((resolve) => setTimeout(resolve, 100))

    GTCard_Active = true;

    await LoadInGameGT(InGamePath + "\\ELIMINATION.gtzip");

    GT_TEXTS.forEach(element => {
      GT_Setting.SetText(element, texts[element]);
    });

    const transition = new Overlay();
    await transition.FadeInOut(GT_Setting)
    await UnLoadInGameGT("ELIMINATION.gtzip");

    GTCard_Active = false;
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
                <CButton onClick={OnShowClicked}>Show</CButton>
                <CButton onClick={OnHideClicked}>Hide</CButton>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCardBody>
    </CCol>
  );
}

const Test = (value) => {
  const OnInGameGT_Path = (value) => {
    InGamePath = value
  }

  const elimination_gt = new ELIMINATION_GT();

  return (
    <CRow>
      <CCol xs={12}>
        <CFormFloating key="1" className="mb-3">
          <CFormInput id="floatingInput" placeholder="value" onInput={(e) => { OnInGameGT_Path(e.target.value) }} />
          <CFormLabel htmlFor="floatingInput">InGameGT Path</CFormLabel>
        </CFormFloating>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Test GTs</strong>
          </CCardHeader>
          <CRow>
            <GT_Card GT_Name="ELIMINATION"
              GT_TEXTS={[elimination_gt.Text.ELIMS, elimination_gt.Text.RANK, elimination_gt.Text.TEAM_NAME]}
              GT_Setting={elimination_gt} />
          </CRow>
        </CCard>

      </CCol >
    </CRow >
  )
}

GT_Card.propTypes = {
  GT_Name: PropTypes.string,
  GT_TEXTS: PropTypes.array,
  GT_Setting: PropTypes.object
};

export default Test
