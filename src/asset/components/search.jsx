import React from 'react'
import { styled } from 'styled-components'

export default function search() {
    return (
        <>
            <SidoSelect name="filter">
                <option value="강원도">강원도</option>
                <option value="경기도">경기도</option>
                <option value="경상남도">경상남도</option>
                <option value="경상북도">경상북도</option>
                <option value="광주광역시">광주광역시</option>
                <option value="대구광역시">대구광역시</option>
                <option value="대전광역시">대전광역시</option>
                <option value="부산광역시">부산광역시</option>
                <option value="서울특별시">서울특별시</option>
                <option value="세종특별자치시">세종특별자치시</option>
                <option value="울산광역시">울산광역시</option>
                <option value="인천광역시">인천광역시</option>
                <option value="전라남도">전라남도</option>
                <option value="전라북도">전라북도</option>
                <option value="제주특별자치도">제주특별자치도</option>
                <option value="충청남도">충청남도</option>
                <option value="충청북도">충청북도</option>
            </SidoSelect>

            <SearchInput type="text" placeholder='장소를 입력하세요' />
        </>
    )
}

const SidoSelect = styled.select`
    width: 180px;
    height: 50px;
    margin: 20px;
    font-size: 15px;
    >option{
        height: 30px;
    }
`
const SearchInput = styled.input`
    text-align: left;
    padding: 10px;
    width: 300px;
    height: 50px;
    border: 0;
    border-bottom: 1px solid #000;
    &:focus{
        outline: none;
    }
`