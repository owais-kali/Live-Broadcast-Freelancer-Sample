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

import { Elimination_GT_Card} from './Elimination';

import Data from 'src/configs/Data'

const Test = (value) => {
  const OnInGameGT_Path = (value) => {
    Data.InGamePath = value
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CFormFloating key="1" className="mb-3">
          <CFormInput id="floatingInput" placeholder="value" defaultValue={Data.InGamePath} onInput={(e) => { OnInGameGT_Path(e.target.value) }} />
          <CFormLabel htmlFor="floatingInput">InGameGT Path</CFormLabel>
        </CFormFloating>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Test GTs</strong>
          </CCardHeader>
          <CRow>
            <Elimination_GT_Card />
          </CRow>
        </CCard>

      </CCol >
    </CRow >
  )
}

export default Test
