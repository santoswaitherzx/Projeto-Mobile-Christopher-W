import { Image, StyleSheet, Platform } from 'react-native';
import {Alert, Button,  View} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC' , dark: '#fefcfc' }}
      headerImage={
        <Image
          source={require('@/assets/images/download MERCADOR.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">MERCADO PAGO!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">SUA RENDA DE SALARIO: 10.000</ThemedText>
        <ThemedText>
           <ThemedText type="defaultSemiBold">FAÇA SUAS TRANSFERENCIAS</ThemedText> 

           <Button 
        onPress={() =>{
          console.log('ciclo da vida');
        }}
        title='TRANSFERIR PELO PIX' 
        />
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: ''
            })}
          </ThemedText>{' '}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
        <ThemedText>
          PIX CADASTRADO : XXXXXXXX@gmail.com
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">DINHEIRO GUARDADO NO SEU BANCO :</ThemedText>
        <ThemedText>
          R$ 5.000,00 : CLIQUE AQUI PARA RETIRA : {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
        <Button 
        onPress={() =>{
          console.log('ciclo da vida');
        }}
        title='www.retire.seu.dinheiro.reserva.www'
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
