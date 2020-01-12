import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonBadge,
  IonIcon
} from "@ionic/react";
import { close } from "ionicons/icons";
import React, { useState } from "react";
import { connect } from "react-redux";
import { addProduct, deleteProduct } from "../redux/product/actions";

const Products: React.FC = ({ products, addProduct, deleteProduct }: any) => {
  const [product, setProduct] = useState<string>("");
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (!product) return;
    addProduct(product);
    setProduct("");
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Products</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" color="primary">
        <form onSubmit={onSubmit}>
          <IonItem>
            <IonLabel position="floating">Product:</IonLabel>
            <IonInput
              type="text"
              placeholder="Enter your product."
              value={product}
              onIonChange={(e: any) => setProduct(e.target.value)}
            />
          </IonItem>
          <IonButton type="submit" color="success" expand="block">
            Add Product
          </IonButton>
        </form>
        <IonItem>
          <IonLabel>Products:</IonLabel>
          <IonBadge color="tertiary" slot="end">
            {products.length}
          </IonBadge>
        </IonItem>
        <IonList>
          {products.map((product: any) => (
            <IonItem key={product.id}>
              <IonLabel>{product.name}</IonLabel>
              <IonButton
                color="danger"
                onClick={() => deleteProduct(product.id)}
              >
                <IonIcon icon={close} />
              </IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

const mapStateToProps = (state: any) => {
  return {
    products: state.product.products
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addProduct: (product: any) => dispatch(addProduct(product)),
    deleteProduct: (id: number) => dispatch(deleteProduct(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
