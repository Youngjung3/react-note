import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Alert
} from "react-native";
import { API_URL } from "./config/constants";
import Carousel from "react-native-anchor-carousel";
import dayjs from "dayjs";

import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.extend(relativeTime);
dayjs.locale("ko");

export default function App() {
  const [products, setProducts] = useState([]);
  const [banners, setBanners] = useState([]);
  const PAGE_WIDTH= Dimensions.get("window").width;
  const baseOptions=({
    width : PAGE_WIDTH / 2,
    height : PAGE_WIDTH /2,
    style:{
      width:PAGE_WIDTH
    },
  })

  useEffect(() => {
    axios
      .get(`${API_URL}/products`)
      .then((result) => {
        setProducts(result.data.products);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get(`${API_URL}/banners`)
      .then((result) => {
        console.log(result);
        setBanners(result.data.banners);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  // console.log(products);
  return (
    <SafeAreaView>
        <StatusBar style="auto" />
        <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity onPress={()=>{
            Alert.alert("배너클릭");
          }}>
            <Carousel
            {...baseOptions}
              width={Dimensions.get("window").width}
              height={300}
              autoPlay={true}
              autoPlayInterval={2000}
              sliderWidth={Dimensions.get("window").width}
              itemWidth={Dimensions.get("window").width}
              itemHeight={300}
              data={banners}
              renderItem={(banner) => {
                return (
                <Image
                  source={{ uri: `${API_URL}/${banner.item.imageUrl}` }}
                  style={styles.bannerImage}
                />
                )
              }}
            />
          </TouchableOpacity>
          <Text>products</Text>
          {products &&
            products.map((product, index) => {
              return (
                <View style={styles.productCard} key={product.id}>
                  {product.soldout === 1 && <View style={styles.productBlur} />}
                  <View>
                    <Image
                      source={{ uri: `${API_URL}/${product.imageUrl}` }}
                      style={styles.productImage}
                      resizeMode={"contain"}
                    />
                  </View>
                  <View style={styles.prodcuctContent}>
                    {/* <Text style={styles.productName}>{product.p_name}</Text> */}
                    <Text style={styles.productName}>{product.name}</Text>
                    <Text style={styles.productPrice}>{product.price}</Text>
                  </View>
                  <View style={styles.productFooter}>
                    <View style={styles.productSeller}>
                      <Image
                        source={{
                          uri: `https://cdn-icons-png.flaticon.com/512/2171/2171990.png`,
                        }}
                        style={styles.productAvatar}
                      />
                      <Text style={styles.productSellerName}>
                        {product.seller}
                      </Text>
                    </View>
                    <Text style={styles.productDate}>
                      {dayjs(product.createdAt).fromNow()}
                    </Text>
                  </View>
                </View>
              );
            })}
            </View>
        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    position: "relative",
  },
  productCard: {
    width: 320,
    borderColor: "rgb(230,230,230)",
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  productImage: {
    width: "100%",
    height: 210,
    // opacity: 1,
  },
  prodcuctContent: {
    padding: 8,
  },
  productSeller: {
    flexDirection: "row",
    alignItems: "center",
  },
  productAvatar: {
    width: 24,
    height: 24,
  },
  productFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
    padding: 8,
  },
  productName: {
    fontSize: 16,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 8,
  },
  productSellerName: {
    fontSize: 16,
  },
  productDate: {
    fontSize: 16,
  },
  productBlur: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "#ffffffaa",
    zIndex: 999,
  },
  bannerImage: {
    width: "100%",
    height: "100%",
  },

});
