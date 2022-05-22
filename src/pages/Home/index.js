import { StyleSheet, View, Text, FlatList } from 'react-native';
import Actions from '../../Components/Actions';
import Balance from '../../Components/Balance';
import Header from '../../Components/Header';
import Movements from '../../Components/Movements';

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '290,00',
    date: '17/09/2022',
    type: 0, //despesas ou boletos
  },
  {
    id: 2,
    label: 'Pix Cliente Pizzaria',
    value: '2.500,00',
    date: '17/09/2022',
    type: 1, //receita ou entradas
  },
  {
    id: 3,
    label: 'Salário',
    value: '4.500,00',
    date: '15/09/2022',
    type: 1, //Salarios
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Ruben Fábio" />
      <Balance saldo="9.250,90" gastos="-527,00" />

      <Actions />
      <Text style={styles.title}>Ultimas Movimentações</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
