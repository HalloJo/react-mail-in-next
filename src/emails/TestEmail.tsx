import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
  Hr,
} from '@react-email/components';
import * as React from 'react';

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const TestEmail = ({}) => {
  return (
    <Html>
      <Head />
      <Preview>Waterschap Limburg Nieuwsbrief</Preview>
      <Body style={main}>
        <Container>
          {/* Logo */}
          <Section style={logo}>
            <Img
              width={175}
              src={
                'https://www.waterschaplimburg.nl/publish/pages/145/logo-limburg-kleur_1.png'
              }
            />
          </Section>

          <Section style={content}>
            {/* Full-width image */}
            <Img
              width={620}
              height={200}
              src={
                'https://www.visitzuidlimburg.nl/media/874155/autumn-0040.jpg?anchor=center&mode=crop&quality=80&width=800&height=400&rnd=132894100180000000'
              }
            />

            {/* First item */}
            <Row style={{ ...boxInfos, paddingBottom: '0' }}>
              <Column>
                <Heading
                  as="h3"
                  style={{
                    fontSize: 16,
                    padding: '5px 20px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    backgroundColor: '#d9f2f6',
                    borderRadius: '50px',
                    margin: '0 0 10px 0',
                  }}
                >
                  Februari 2023
                </Heading>
                <Text style={{ ...paragraph, fontWeight: 'bold' }}>
                  Onze Maas. Onze veiligheid. Om u als bewoners of ondernemer in
                  het Maasdal te blijven beschermen, werken we iedere dag aan
                  sterke dijken. Dat vraagt om slim samenspel met partners en
                  betrokkenen. Samen bepalen we wat belangrijk is voor het
                  gebied. Zo bouwen we met het oog op de toekomst aan een
                  hoogwaterveilig én aantrekkelijk Limburgs Maaslandschap. In
                  deze nieuwsbrief leest u de laatste stand van zaken van de
                  dijkversterkings-projecten.
                </Text>

                <Hr style={{ margin: '25px 0' }} />

                <Heading
                  style={{ fontWeight: 'bold', fontSize: 24, color: '#007685' }}
                >
                  Wij maken de dijk.
                </Heading>
                <Text style={paragraph}>
                  Om de creatieve denkkracht van Limburgse basisschoolleerlingen
                  aan te boren, legden we hen de afgelopen tijd verschillende
                  vraagstukken voor. Leerlingen van Basisschool De Springbeek in
                  Venlo bogen zich over de vraag: hoe passen we dijken in, in de
                  stad? Hun ideeën varieerden van ‘huizen op palen boven dijken’
                  tot ‘een parkeergarage in de dijk'.
                </Text>
                <Text>
                  Leerkracht Simone Derks en programmasecretaris Joyce Vreede
                  zijn erg enthousiast over de resultaten, die nu vertaald
                  worden naar de dijkprojecten. “Kinderen zien water niet als
                  een bedreiging en dat is voor volwassenen een verfrissende
                  manier van denken. Dat betekent niet dat kinderen niet moeten
                  weten wat de risico’s van hoogwater zijn. Het is belangrijk
                  dat ze zich bewust worden van het belang van
                  hoogwaterbescherming.”
                </Text>
                <Button
                  style={{
                    display: 'inline-block',
                    padding: 20,
                    backgroundColor: '#e00707',
                  }}
                >
                  Lees hun verhaal
                </Button>
              </Column>
            </Row>

            <Row style={{ ...boxInfos, paddingTop: '0' }}>
              <Hr style={{ margin: '25px 0' }} />
              <Column colSpan={1}>
                <Text>Left column</Text>
              </Column>
              <Column colSpan={1}>
                <Text>Right column</Text>
              </Column>
            </Row>
          </Section>

          <Section style={containerImageFooter}>
            <Img width={620} src={`${baseUrl}/static/yelp-footer.png`} />
          </Section>

          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              color: 'rgb(0,0,0, 0.7)',
            }}
          >
            © 2022 | Yelp Inc., 350 Mission Street, San Francisco, CA 94105,
            U.S.A. | www.yelp.com
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default TestEmail;

const main = {
  backgroundColor: '#fff',
  fontFamily: '"Inter",sans-serif',
};

const date = {
  fontSize: 16,
  padding: '5px 20px',
  fontWeight: 'bold',
  textAlign: 'center',
  backgroundColor: '#d9f2f6',
  borderRadius: '50px',
};

const paragraph = {
  fontSize: 14,
};

const logo = {
  padding: '30px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const containerButton = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
};

const button = {
  backgroundColor: '#e00707',
  padding: '12px 30px',
  borderRadius: 3,
  color: '#FFF',
  fontWeight: 'bold',
  border: '1px solid rgb(0,0,0, 0.1)',
  cursor: 'pointer',
};

const content = {
  border: '1px solid rgb(0,0,0, 0.1)',
  borderRadius: '3px',
  overflow: 'hidden',
};

const boxInfos = {
  padding: '20px 40px',
};

const containerImageFooter = {
  padding: '45px 0 0 0',
};
