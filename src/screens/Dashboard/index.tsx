import React from 'react';
import { HightlightCard } from '../../components/HightlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

import {
    Container,
    Header,
    UserInfo,
    Photo,
    User,
    UserGreetting,
    UserName,
    HeaderWapper,
    Icon,
    HightlightCards,
    Transactions,
    Tittle,
    TransactionsList,


} from './styles'

export interface DataListprops extends TransactionCardProps {
    id: string;
}

export function Dashboard() {
    const data: DataListprops[] = [
        {
            id: '1',
            type: 'positive',
            title: "Desenvolvimento de Site",
            amount: "R$ 12.000,00",
            category: {
                name: "vendas",
                icon: "dollar-sign",
                key: '1'
            },
            date: "12/04/2020",
        },
        {
            id: '2',
            type: 'negative',
            title: "Hamburguer Pizzy",
            amount: "  R$ 59,00",
            category: {
                name: "alimentção",
                icon: "coffee",
                key: '2'
            },
            date: "12/04/2020",
        },
        {
            id: '3',
            type: 'negative',
            title: "Aluguel do apartamento",
            amount: " R$ 1.200,00",
            category: {
                name: "casa",
                icon: "shopping-bag",
                key: '3'
            },
            date: "12/04/2020",
        },
    ];
    return (
        <Container>
            <Header>
                <HeaderWapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/67652151?v=4' }} />
                        <User>
                            <UserGreetting>Olá,</UserGreetting>
                            <UserName>Andrei</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power" />

                </HeaderWapper>

            </Header>
            <HightlightCards>
                <HightlightCard
                    type="up"
                    title='Entradas'
                    amount='R$ 17.400,00'
                    lastTransaction='Última entrada dia 13 de abril'
                />
                <HightlightCard
                    type="down"
                    title='Saidas'
                    amount='R$ 17.400,00'
                    lastTransaction='Última saida dia 13 de abril' />
                <HightlightCard
                    type="total"
                    title='Total'
                    amount='R$ 17.400,00'
                    lastTransaction='1 á 16 de abril' />
            </HightlightCards>
            <Transactions>
                <Tittle>Listagem</Tittle>
                <TransactionsList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />}
                />
            </Transactions>
        </Container >
    )
}





