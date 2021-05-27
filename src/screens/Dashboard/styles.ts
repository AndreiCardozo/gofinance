import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper'
import { FlatList } from 'react-native'

import { DataListprops } from './index';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height:${RFPercentage(42)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    flex-direction: row;
    align-items:flex-start;
    justify-content: center;
`;


export const Title = styled.Text`
    width: 100%;
    height:30%;
    background-color: ${({ theme }) => theme.colors.primary}
`;

export const HeaderWapper = styled.View`
    flex-direction: row;
    align-items:center;
    padding: 0 24px;
    margin-top: ${getStatusBarHeight() + RFValue(28)}px;
    width:100%;
    justify-content:space-between;

    
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
    
`;

export const Photo = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius:10px;
`;

export const User = styled.View`
    margin-left: 17px;
`;

export const UserGreetting = styled.Text`
    color: ${({ theme }) => theme.colors.shape} ;
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular} ;
`;

export const UserName = styled.Text`
    color: ${({ theme }) => theme.colors.shape} ;
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold} ;
`;

export const Icon = styled(Feather)`
    color:${({ theme }) => theme.colors.secondary};
    font-size:${RFValue(24)}px;
`;

export const Card = styled.View`
    width: ${RFValue(310)}px;
    height: ${RFValue(250)}px;
    background-color: ${({ theme }) => theme.colors.shape};
    align-items: center;
    margin-top:-100px;
    margin-left: 40px;
    
`;
export const HightlightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingLeft: 24 }
})`
   width:100%;
   position:absolute;
   margin-top: ${RFPercentage(20)}px;
`;

export const Transactions = styled.View`
flex: 1;
padding: 0 24px;
margin-top: ${RFPercentage(12)}px;
`;

export const Tittle = styled.Text`
font-size:${RFValue(18)}px;
font-family: ${({ theme }) => theme.fonts.regular};
margin-bottom: 16px;
`;

export const TransactionsList = styled(
    FlatList as new () => FlatList<DataListprops>
).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: getBottomSpace()

    }
})`

`;


