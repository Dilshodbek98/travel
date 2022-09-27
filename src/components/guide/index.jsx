import React from 'react'
import { useContext } from 'react';
import { LanguageContext } from '../../context/languageToggle/language';
import { Container, Section, Wrapper } from './style'

const GuideComponent = () => {
  const [language, setLanguage] = useContext(LanguageContext)
  return (
    <Container>
      {language === "English" ? (
        <Wrapper>
          <Section>
            <h1 className="heading">Is Uzbekistan Worth Visiting?</h1>
            <p>
              <strong>Uzbekistan is unique</strong>, offering visitors exquisite
              architecture that echoes from the days of Tamerlane, Alexander the
              Great and the land’s earliest Zoroastrian inhabitants. Not to be
              outdone by the past, contemporary Uzbekistan is equally alluring,
              replete with a magnetic culture and diverse landscapes that form
              the perfect backdrop to endless adventures.
            </p>
            <p>
              <strong>Uzbekistan travel is an affordable option</strong> for
              thrifty travelers, with all-inclusive, guided tours available for
              a fraction of the cost of equivalent trips in Europe or South
              America. Inexpensive transportation, cheap meals and an
              ever-growing selection of hostels have also opened the door to
              independent travelers.
            </p>
            <p>
              <strong>Uzbekistan is more accessible</strong> than ever before,
              with citizens of almost every nation eligible for either 30-day
              visa-free entry or an inexpensive online visa. Once in country,
              all major sights are connected by a modern and reliable rail
              system, while each major city welcomes you with a wide array of
              comfortable accommodation choices. At the same time…
            </p>
          </Section>
          <Section>
            <h1 className="heading">Is Uzbekistan Safe for Travel?</h1>
            <p>
              Uzbekistan is safe, with an extremely low rate of violent crime.
              Law enforcement officers patrol the streets regularly and stand
              prepared to help and support tourists as needed. Also in
              Samarkand, Bukhara and Khiva you will find English speaking
              Tourist Police ready to assist guests of this sunny land.
              Travelers often remark on the kindness and helpfulness of
              Uzbekistan’s people, who will go out of their way to assist a
              guest in need. The nation has become increasingly tourist-friendly
              in recent years and takes a genuinely welcoming stance towards
              foreigners and tourists.
            </p>
          </Section>
          <Section>
            <h1 className="heading">Choose Your Transport</h1>
            <p>
              The Silk Road sojourners of old would doubtless be jealous of the
              ease with which modern explorers can reach that golden road to
              Samarkand described in the poem of James Elroy Flecker.
              Uzbekistan, located in the very heart of Central Asia, is more
              accessible than you may think. Direct flights currently connect
              capital city Tashkent with Istanbul, Bangkok, Moscow and even New
              York City, while most major cities in Europe and the eastern US
              are one layover away from this otherworldly land. Once in
              Uzbekistan, each region and major city is conveniently connected
              by an intricate, efficient railway system. If train travel isn’t
              your thing, short domestic flights are a quick alternative, while
              transport by private car allows you to soak in the scenery as you
              go.
            </p>
          </Section>
          <Section>
            <h1 className="heading">Visa Matters</h1>
            <p>
              Thanks to relaxed Uzbekistan visa policies that made their grand
              debut in 2018, travel to Uzbekistan has never been easier.
              Citizens of nearly 80 nations, including Australia, Japan, South
              Korea, and many European and South American countries can now
              travel in Uzbekistan visa-free for up to 30 days. Passport holders
              of over 50 additional nations, including the US, India, Hong Kong,
              China and most Middle Eastern nations can apply online for a
              30-day electronic tourist visa at a cost of 20 USD. Additionally,
              5-day transit visas may be obtained pending prior approval or
              flight tickets that confirm your departure.
            </p>
          </Section>
        </Wrapper>
      ) : (
        <Wrapper>
          <Section>
            <h1 className="heading">
              O'zbekistonga tashrif buyurishga arziydimi?
            </h1>
            <p>
              <strong>O'zbekiston noyob</strong>dir, u tashrif buyuruvchilarga
              nafislikni taklif etadi Tamerlan, Iskandar davridagi arxitektura
              Buyuk va erning eng qadimgi zardushtiy aholisi. Bo'lmaslik
              O'tmishdan ustun bo'lgan zamonaviy O'zbekiston ham xuddi shunday
              jozibali, magnit madaniyati va turli xil landshaftlar bilan to'la
              cheksiz sarguzashtlar uchun mukammal fon.
            </p>
            <p>
              <strong>O'zbekiston sayohati hamyonbop variant</strong> uchun
              tejamkor sayohatchilar, har bir narsani o'z ichiga olgan bilan,
              hidoyat turlar uchun mavjud Evropa yoki janubdagi ekvivalent
              sayohatlar narxining bir qismi Amerika. Arzon transport, arzon
              ovqatlanish va doimiy ravishda o'sib borayotgan yotoqxonalar
              tanlovi ham eshiklarni ochdi mustaqil sayohatchilar.
            </p>
            <p>
              <strong>O'zbekiston har qachongidan ham qulayroq</strong>, 30
              kunlik muddatga ega bo'lgan deyarli har bir millat fuqarolari
              bilan vizasiz kirish yoki arzon onlayn viza. Bir marta mamlakatda,
              barcha asosiy diqqatga sazovor joylar zamonaviy va ishonchli temir
              yo'l bilan bog'langan tizim, har bir yirik shahar sizni keng
              doiradagi bilan kutib oladi qulay turar joy tanlash. Xuddi shu
              paytni o'zida…
            </p>
          </Section>
          <Section>
            <h1 className="heading">
              O‘zbekiston sayohat qilish uchun xavfsizmi?
            </h1>
            <p>
              O‘zbekiston xavfsiz, zo‘ravonlik bilan bog‘liq jinoyatlar juda
              past. Huquq-tartibot idoralari xodimlari muntazam ravishda
              ko‘chalarni nazorat qilib, tik turishadi kerak bo'lganda
              turistlarga yordam berishga va qo'llab-quvvatlashga tayyor.
              Shuningdek, ichida Samarqand, Buxoro va Xivada siz ingliz tilida
              so'zlasha olasiz Sayyohlik politsiyasi quyoshli mamlakat
              mehmonlariga yordam berishga tayyor. Sayohatchilar ko'pincha uning
              mehribonligi va yordamini ta'kidlaydilar O'zbekiston xalqi, a
              muhtoj mehmon. Mamlakat sayyohlar uchun qulay bo'lib qoldi so'nggi
              yillarda va unga nisbatan chinakam ijobiy pozitsiyani egallaydi
              chet elliklar va sayyohlar.
            </p>
          </Section>
          <Section>
            <h1 className="heading">Transportingizni tanlang</h1>
            <p>
              Qadimgi Ipak yo'li muhojirlari, shubhasiz, hasad qiladilar
              zamonaviy tadqiqotchilar bu oltin yo'lga osonlik bilan erisha
              oladilar Samarqand Jeyms Elroy Fleker she'rida tasvirlangan.
              Markaziy Osiyoning qoq markazida joylashgan O'zbekiston ko'proq
              siz o'ylagandan ko'ra foydalanish mumkin. To'g'ridan-to'g'ri
              reyslar hozirda ulanadi poytaxti Toshkent Istanbul, Bangkok,
              Moskva va hatto Yangi bilan York Siti, Evropaning ko'pgina yirik
              shaharlari va AQShning sharqiy qismi bu o'zga dunyo yurtidan bir
              lahza uzoqlikda. Bir marta kirgan O‘zbekiston, har bir viloyat va
              yirik shaharlar qulay tarzda bog‘langan murakkab, samarali temir
              yo'l tizimi orqali. Agar poezd sayohati bo'lmasa sizning narsa,
              qisqa ichki reyslar tez muqobil, esa shaxsiy avtoulovda tashish
              sizga o'zingiz kabi manzaraga singib ketish imkonini beradi ket.
            </p>
          </Section>
          <Section>
            <h1 className="heading">Viza masalalari</h1>
            <p>
              O'zbekiston viza siyosatining engillashtirilgani tufayli bu
              ularning buyukligini oshirdi debyut 2018, O'zbekistonga sayohat
              hech qachon oson bo'lmagan. 80 ga yaqin davlat fuqarolari,
              jumladan Avstraliya, Yaponiya, Janubiy Koreya va ko'plab Evropa va
              Janubiy Amerika mamlakatlari endi mumkin O'zbekistonda 30 kungacha
              vizasiz sayohat qilish. Pasport egalari 50 dan ortiq qo'shimcha
              davlatlar, jumladan AQSh, Hindiston, Gonkong, Xitoy va Yaqin
              Sharqning aksariyat davlatlari a uchun onlayn ariza topshirishlari
              mumkin 30 kunlik elektron turistik vizasi 20 AQSh dollari. Bundan
              tashqari, 5 kunlik tranzit vizalari oldindan ma'qullanmaguncha
              yoki olinishi mumkin ketishingizni tasdiqlovchi aviachiptalar.
            </p>
          </Section>
        </Wrapper>
      )}
    </Container>
  );
}

export default GuideComponent;