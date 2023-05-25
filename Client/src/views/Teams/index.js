import React from 'react';
import TeamsList from "./TeamsList"
import { CFooter } from '@coreui/react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'

const index = () => {
    return (
        <div>
            <TeamsList />
            <CFooter>
                <div>
                {['normal'].map((state, index) => (
                <CRow className="align-items-center mb-3" key={index}>
                  <CCol xs>
                      <CButton
                        color="primary"
                        variant="outline"
                        key={index}
                        active={state === 'active'}
                        disabled={state === 'disabled'}
                      >
                        ADD TEAM
                      </CButton>
                  </CCol>
                </CRow>
              ))}
                </div>
            </CFooter>
        </div>
    )
}

export default index