import { Injectable } from '@angular/core';
import { Receta } from '../interfaces/recetas';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  private recetas: Receta[] = [
    {
      id: '1',
      title: 'Bacalao al pil pil',
      imageUrl: 'https://www.hogarmania.com/archivos/202112/karl-bacalao-al-pil-pil-xl-668x400x80xX.jpg',
      cookingTime: 20,
      ingredients: ['4 trozos de bacalao salado', '1/2 guindilla', '5 dientes de ajo','300 ml. de aceite virgen extra'],
      ingredientsCount: 4,
      steps: ['Pon el aceite en una cazuela baja y amplia. Pela los ajos y dóralos. Cuando estén dorados, pásalos a un plato y resérvalos. Limpia la guindilla y trocéala en 4, saltéalas brevemente y retíralas a un plato.', 'En el mismo aceite, pon a cocinar los trozos de bacalao (primero con la piel hacia arriba). Fríelos cuatro minutos por cada lado y retíralos a un plato.', 'El suero que vayan soltando resérvalo en un bol.','Pasa el aceite a otro bol y espera a que se temple el aceite. Cuando esté templado pon un poco de aceite en la cazuela y un poco del suero del bacalao y lígalo con un colador moviendo suavemente. Añade el resto del aceite poco a poco.','Cuando hayas añadido la mitad del aceite incorpora el resto del suero sin dejar de mover con el colador. Incorpora el resto del aceite, sigue moviendo hasta que quede un pil pil espeso. Incorpora las tajadas de bacalao y calienta bien.','Sirve en un plato las tajadas y cubre con la salsa. Decora con los ajos y los trozos de guindillas.','El bacalao al pil-pil es una de las recetas más tradicionales su elaboración es sencilla pero requiere su practica y su resultado es espectacular.']
    },
    {
      id: '2',
      title: 'Huevos rotos',
      imageUrl: 'https://www.enriquetomas.com/ar/blog/wp-content/uploads/2022/01/IMG1734-1-1024x732.jpg',
      cookingTime: 30,
      ingredients: ['3 ó 4 patatas medianas', '4 huevos grandes o tamaño L', '80 gr de un buen jamón cortado finito', 'Aceite', 'Sal'],
      ingredientsCount: 5,
      steps: ['Empezamos pelando las patatas y cortándolas largas. Las ponemos en un bol con abundante agua para quitarles el almidón, de este modo no se pegarán al freírlas. las escurrimos y las secamos bien con un paño limpio de cocina.', 'Echamos aceite de oliva en una sartén a fuego medio, cuando esté lo suficientemente caliente, añadimos todas las patatas y las dejamos hacer hasta que estén tiernas. Subimos el fuego al máximo y las doramos ligeramente, no demasiado porque si quedan muy crujientes no absorberán bien el huevo. Sacarlas con una espumadera y ponerlas en una bandeja.', 'En esa misma sartén, quitamos aceite hasta dejar solo unas pocas cucharadas. Subimos el fuego al máximo. Echamos los huevos y los dejamos durante un minutos que cuaje la clara. Con mucho cuidado y ayudándonos de una espumadera, les damos la vuelta y los ponemos sobre las patatas. Ahora solo queda romperlos con la ayuda de un tenedor y una cuchara. Servirlos inmediatamente.']
    },
    {
      id: '3',
      title: 'Dorada al horno',
      imageUrl: 'https://cdn.elcocinerocasero.com/imagen/receta/1000/2016-12-02-01-53-41/dorada-al-horno-con-patatas.jpeg',
      cookingTime: 90,
      ingredients: ['Dorada', 'Patatas', 'Cebolla','Ajo','Vino blanco','Aceite','Pimentón','Pan rallado','Sal','Pimienta','Perejil','Zumo de limón'],
      ingredientsCount: 12,
      steps: ['Lo primero que haremos para preparar esta receta de dorada al horno con patatas será preparar el pescado. Cogemos la dorada limpia y bien escurrida y le hacemos tres cortes en uno de los costados. La salamos con sal gorda por los dos lados, colocamos una rodaja de limón en cada uno de los cortes y la reservamos.A continuación, pelamos las patatas y las cebollas. Cortamos las patatas tipo panadera, la cebolla fina y añadimos aceite de oliva virgen extra a la fuente de horno.', 'Ponemos una sartén a fuego fuerte con abundante aceite de oliva virgen extra y freímos ligeramente las patatas. Cuando las patatas empiecen a dorarse, las escurrimos y colocamos en la fuente de horno.Sacamos el aceite de freír las patatas de la sartén, bajamos el fuego, añadimos un poco de aceite de oliva virgen extra y sofreímos los ajos y la cebolla.Cuando la cebolla empiece a coger color, la colocamos en la fuente de horno encima de las patatas.', 'A continuación, colocamos la dorada en la fuente encima de la cama de patatas y cebolla. La rociamos con aceite de oliva virgen extra y un chorrito de zumo de limón y la metemos en el horno precalentado a 180º C durante 15 minutos.','Pasados los 15 minutos, sacamos la fuente del horno y regamos el pescado y las patatas con el vino blanco. Tendremos preparada una mezcla de pan rallado con pimentón que vamos a espolvorear por toda la fuente, por encima de la dorada y de las patatas. Metemos nuevamente en el horno durante otros 10 minutos más.Esta capa de pan rallado y pimentón es opcional, pero le da un punto súper rico y diferente a la dorada.','Pasados los 10 minutos, el pescado debería estar hecho en su punto y con la superficie con la costra del pan rallado doradita. Sacamos del horno, añadimos un poco de perejil fresco picado y ya tenemos la dorada lista para servir.']
    },
    {
      id: '4',
      title: 'Rabo de toro',
      imageUrl: 'https://www.hogarmania.com/archivos/202102/karl6699-rabo-toro-xl-668x400x80xX-1.jpg',
      cookingTime: 90,
      ingredients: ['1.200 g de rabo de vaca', '2 zanahorias', '1 puerro','2 patatas','1/2 l de caldo de carne','Sal','2 clavos','Perejil','2 cebollas','1 pimiento verde','2 dientes de ajo','Harina','400 ml de salsa de tomate','Aceite','Pimienta','1 hoja de laurel'],
      ingredientsCount: 17,
      steps: ['Calienta un poco de aceite en la olla rápida. Pela las cebollas, córtalas en dados y agrégalas a la olla. Pela las zanahorias, córtalas en cuartos de luna e incorpóralas. Retira el tallo y las semillas del pimiento, córtalo en dados e incorpóralo. Limpia el puerro, córtalo en rodajas finas y añádelo. Pela los ajos, pícalos en dados y agrégalos. Sazona las verduras y rehógalas durante 10-15 minutos a fuego medio.', 'Salpimienta los trozos de rabo, pásalos por harina y fríelos en una sartén con un buen chorro de aceite. Cuando estén dorados añádelos a la olla. Agrega la hoja de laurel y los clavos. Vierte el vino tinto (dale un hervor para que se evapore el alcohol), el caldo y la salsa de tomate. Mezcla bien, sazona, cierra la olla y cocina el rabo durante 1 hora desde el momento en que suba la válvula.', 'Retira el rabo y resérvalo. Con una batidora eléctrica, tritura la salsa en la olla. Introduce el rabo y caliéntalo.','Pela las patatas, trocea (cascándolas) y fríelas en una sartén con abundante aceite caliente. Retíralas a un plato cubierto con papel absorbente de cocina. Sazona y espolvoréalas con un poco de perejil picado.','Sirve el rabo, salsea y acompáñalo con las patatas fritas. Decora los platos con unas hojas de perejil.']
    },
    {
      id: '5',
      title: 'Pavía de merluza',
      imageUrl: 'https://yhoyquecomemos.com/wp-content/uploads/2019/01/pavias-de-merluza-2.jpg.webp',
      cookingTime: 40,
      ingredients: ['500 gr de lomos de merluza sin espinas', '300 gr de harina de trigo', '2 cucharadas de las de postre de levadura química','1 cucharada de sal','Una cucharada sopera de aceite de oliva','250 ml de agua muy fría','150 ml de cerveza rubia','Un toque de colorante alimenticio(opcional)','Aceite de oliva para freir'],
      ingredientsCount: 10,
      steps: ['En primer lugar, para comenzar a hacer nuestras Pavías de merluza vamos a preparar la masa para el rebozado.', 'Ponemos en un bol los 300 gr de harina tamizada, añadimos la levadura, la sal y añadimos el agua, es importante que el agua esté muy fría, la tendremos antes unas horas en la nevera.', 'Seguidamente, le añadimos la cerveza fría también, una cucharada sopera de aceite de oliva y mezclamos bien, hasta que nos quede la masa sin grumos,','A continuación, echamos un toque de colorante alimenticio, esto es opcional, sólo para dar un poco de color a la masa. Dejamos reposar unos 10 minutos.','Seguidamente cortamos los lomos de merluza en tiras gruesas, las colocamos en un papel absorbente de cocina para quitar el agua que puedan soltar, es importante que el pescado esté seco para que se adhiera mejor la masa.','Ahora, pasamos cada trozo de pescado por la masa y freímos en aceite de oliva bien caliente.El aceite debe de estar bastante caliente y el agua que usamos para hacer la masa debe de estar bien fría, este cambio de temperatura hará que el rebozado nos quede bien crujiente.','Una vez que hayan cogido color por ambos lados, los sacamos en un plato con papel de cocina para eliminar el exceso de aceite y lo servimos caliente.']
    },
    {
      id: '6',
      title: 'Tortilla de patatas',
      imageUrl: 'https://cdn.elcocinerocasero.com/imagen/receta/1000/2022-06-15-19-04-10/tortilla-de-patata.jpeg',
      cookingTime: 60,
      ingredients: ['10 huevos medianos', '800 gr de patatas', '120 gr de cebolla','Sal','Aceite de oliva virgen extra'],
      ingredientsCount: 5,
      steps: ['En esta receta vamos a preparar una tortilla de patatas con cebolla, así que lo primero que haremos será pelar las patatas y limpiar las cebollas. Cortamos las patatas en trozos del mismo tamaño para que la cocción de las patatas sea lo más uniforme posible y las reservamos. Con la cebolla limpia y pelada, la vamos a cortar al gusto, nosotros normalmente la cortamos en medias lunas y en trozos no muy largos. Cuando tengamos todos los ingredientes listos de la tortilla de patatas, ponemos una sartén a fuego medio con abundante aceite de oliva virgen extra.', 'Cuando el aceite de la sartén empiece a coger temperatura, incorporamos la cebolla y esperamos unos dos minutos a que empiece a dorarse y a que el aceite vuelva a coger temperatura. Al cocinar la cebolla antes de añadir las patatas, le daremos una pequeña cocción y evitaremos que nos quede la cebolla cruda. Pasados los dos minutos o si vemos que la cebolla empieza a dorarse, vamos a añadir las patatas poco a poco con cuidado de que no salpique el aceite.', 'Mientras se fríen las patatas, vamos a cascar los huevos en un bol y les añadimos un poco de sal. Batimos los huevos y reservamos. Después de unos 8-12 minutos con el fuego medio-fuerte y removiendo de vez en cuando, las patatas ya estarán cocinadas y tendrán un tono dorado. En ese momento vamos retirando las patatas con una espumadera, procurando escurrir el máximo de aceite, y las vertemos en el bol donde están los huevos batidos. Cuando tengamos todas las patatas en el bol, añadimos la sal que le corresponden a las patatas y removemos para integrar todos los ingredientes de la tortilla.','Para hacer la tortilla de patatas vamos a utilizar la misma sartén en la que cocinamos las patatas. Colamos y guardamos el aceite que hemos utilizado y ponemos la sartén a fuego medio con un poco de aceite de oliva virgen extra. Cuando el aceite esté caliente, vertemos la mezcla de la tortilla en la sartén y repartimos la mezcla con una espátula. Cuando la superficie empiece a cuajarse y los bordes de la tortilla a separarse de la sartén (2 o 3 minutos dependiendo del fuego), con la ayuda de un plato, damos la vuelta a la tortilla de patatas con un giro rápido. La echamos de nuevo a la sartén para que se cuaje por el otro lado. Con la ayuda de una espátula o espumadera, le vamos dando forma por los bordes y cuando esté cuajada (en 1 o 2 minutos) con la ayuda del mismo plato le damos otra vez la vuelta y ya estaría lista.En este paso y dependiendo de si nos gusta la tortilla de patatas más o menos cuajada, prolongaremos la cocción y le iremos dando las vueltas necesarias hasta que la tengamos en nuestro punto de cocción preferido.','Podemos acompañar la tortilla de patatas de una buena ensalada mixta. Además, también la podemos utilizar para hacer bocadillos o para poner un aperitivo cortada en taquitos.']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recetas];
  }

  getRecipe(recetaId: any) {
    return {
      ...this.recetas.find((receta) => {
        return receta.id === recetaId;
      }),
    };
  }

}







