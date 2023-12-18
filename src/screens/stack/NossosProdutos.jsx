import React, {useState, useEffect, useContext} from 'react';
import Context from '../../context/Context';
import { StyleSheet, ScrollView, View, SafeAreaView } from 'react-native';
//Components
import Header from '../../component/Header';
import ToggleMenu from '../../component/ToggleMenu';
import Background from '../../component/Background';
import Product from '../../component/flatlist/Product';

import { allProducts } from '../../services/product';

function NossosProdutos({navigation, route: { params }}) {
  const { loader, setLoader } = useContext(Context);
  const [scrollY, setScrollY] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoader(true);
    async function FetchData() {
      const data = await allProducts(params.token);
      setProducts(data);
      setLoader(false);
    }
    FetchData()
  }, [])

  return (
    <>
    <Background img={'tree'} tint={"#B87333"} />
    <ToggleMenu level={scrollY} />
    {
      !loader ? (
        <ScrollView scrollEventThrottle={null} onScroll={(event) => setScrollY(event.nativeEvent.contentOffset.y)} style={styles.container}>
          <SafeAreaView>
            <Header name={params.name} />
            <View style={styles.products}>
              {
                products.map((product, i) =>  <Product key={`product-${i}`} nav={navigation} info={product} /> )
              }
            </View>
          </SafeAreaView>
        </ScrollView>
      ) : (
        <>
          <Background img={'tree'} />
        </>
      ) 
    }
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  products: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  // product: {
  //   backgroundColor: 'white',
  //   marginBottom: 10,
  //   borderRadius: 10,
  //   img: {
  //     width: width / 3.3,
  //     height: 120,
  //     objectFit: 'contain'
  //   }
  // }
})

export default NossosProdutos;