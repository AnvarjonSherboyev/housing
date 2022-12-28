import styled from 'styled-components';
import {Location} from "@styled-icons/entypo/Location"
import {Telephone} from "@styled-icons/bootstrap/Telephone"
import {Email} from "@styled-icons/material-outlined/Email"
import {Facebook} from "@styled-icons/boxicons-logos/Facebook"
import {Twitter} from "@styled-icons/boxicons-logos/Twitter"
import {Instagram} from "@styled-icons/boxicons-logos/Instagram"
import {Linkedin} from "@styled-icons/boxicons-logos/Linkedin"


export const Container = styled.div`
display: flex;
width:100%;
position:relative;
justify-content: center;
align-items:center;
border:1px solid red;
padding:48px 0;
background: var(--colorPrimary);
`

export const CaruselWrapper = styled.div`
/* display:flex; */
/* justify-content: center;
align-items:center; */
width:100%;
/* height: 350px; */
max-width:var(--mainWidth);
padding:var(--mainPadding);
`



export const Icon = styled.div`
padding:12px;
:hover{
    color: var(--background);
}
`
Icon.Location = styled(Location)`
width:50px;
color:#fff;
`
Icon.Telephone = styled(Telephone)`
width:25px;
color:#fff;
`
Icon.Email = styled(Email)`
width:50px;
color:#fff;
`
Icon.Facebook = styled(Facebook)`
width:30px;
color:#fff;
`
Icon.Twitter = styled(Twitter)`
width:30px;
color:#fff;
`
Icon.Instagram = styled(Instagram)`
width:30px;
color:#fff;
`
Icon.Linkedin = styled(Linkedin)`
width:30px;
color:#fff;
`


export const ContentWrap = styled.div`
display:flex;
justify-content:space-between;
flex-wrap:wrap;
border:1px solid red;
margin-top:40px;
`
export const Content = styled.div`
display:flex;
gap:20px;
flex-direction:column;
min-height:130px;
`
Content.Title = styled.div`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
cursor:pointer;
:hover{
    color: var(--background)
}
`
Content.Info = styled.div`
display:flex;
max-width:310px;
gap:20px;
text-align: start;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #FFFFFF;
cursor:pointer;
:hover{
    color: var(--background);
}
`