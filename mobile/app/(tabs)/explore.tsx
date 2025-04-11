import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
        source={require('@/assets/images/download MERCADOR.png')}
        style={styles.headerImage}
      />
    }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Seus Beneficios!</ThemedText>
      </ThemedView>
      <ThemedText>Beneficios que você pode alcança :</ThemedText>
      <Collapsible title="Conta gratuita: Não há taxas mensais ">
        <ThemedText>
          {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
          A conta do Mercado Pago é gratuita e não tem taxas mensais. Além disso, o Mercado Pago oferece um cartão de débito ou crédito sem anuidade
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Transferências gratuitas: É possível fazer transferências sem taxas ">
        <ThemedText>
          Com a Conta Mercado Pago, você faz transferências gratuitas e ilimitadas para qualquer banco, tem a possibilidade de dividir gastos com amigos e enviar o dinheiro sem custo para outros usuários da conta Mercado Pago usando o seu saldo em conta.{' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
      </Collapsible>
      <Collapsible title="Pix: É possível fazer pagamentos via Pix a qualquer hora ">
        <ThemedText>
          É possível fazer pagamentos via Pix a qualquer hora, pois o Pix está disponível 24 horas por dia, 7 dias por semana.
          Te permitirá enviar e receber dinheiro de qualquer conta bancária ou digital em segundos, a qualquer dia e horário, incluindo finais de semana e feriados.<ThemedText type="defaultSemiBold"></ThemedText> {' '}
        </ThemedText>
        <ExternalLink href="https://reactnative.dev/docs/">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
        <ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
        </ExternalLink>
        <ThemedText>
        </ThemedText>
        <ExternalLink href="">
        </ExternalLink>
      </Collapsible>
      <ThemedText>
      </ThemedText>
      {Platform.select({
        ios: (
          <ThemedText>
            The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
            component provides a parallax effect for the header image.
          </ThemedText>
        ),
      })}

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    height:'100%',
    width: '100%',
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
