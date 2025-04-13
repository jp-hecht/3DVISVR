const puppeteer = require('puppeteer');

(async () => {
  const url = 'https://jp-hecht.github.io/3DVIS/Madelaine/'; // 👉 Deine Seite hier eintragen
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Lade die Seite und warte, bis alles geladen ist
  await page.goto(url, { waitUntil: 'networkidle0' });



  await page.addStyleTag({
    content: `
      /* Schriftgrößen anpassen */
      h1 { font-size: 15pt !important; }
      h2 { font-size: 14pt !important; }
      h3 { font-size: 12pt !important; }
      body, p {
        font-size: 10pt !important;
        line-height: 1.3;
        margin: 0;
        padding: 0;
      }
  
      /* GitHub Pages Header/Footer ausblenden */
      .site-header, .site-footer {
        display: none !important;
      }
  
      /* Überschriften enger setzen */
      h1, h2, h3, h4, h5, h6 {
        margin-top: 0.6em;
        margin-bottom: 0.3em;
        page-break-after: avoid;
      }
  
      /* Kompakte Absätze */
      p {
        margin-top: 0.05em;
        margin-bottom: 0.15em;
        page-break-inside: avoid;
        orphans: 2;
        widows: 2;
      }
  
      /* Kompakte Listen */
      ul, ol {
        margin-top: 0.1em;
        margin-bottom: 0.2em;
        padding-left: 1.2em;
      }
  
      li {
        margin-bottom: 0.1em;
      }
  
      /* Tabellen kompakt */
      table {
        margin: 0.4em 0;
        border-collapse: collapse;
      }
  
      th, td {
        padding: 2px 4px;
      }
  
      /* Bilder & Blöcke */
      img, blockquote, pre, code {
        margin: 0.4em 0;
      }
  
      /* Kartenhöhe */
      .leaflet-container {
        height: 220px !important;
      }
  
      /* Bilder zentriert, aber kleiner */
      p > img, div > img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        max-height: 220px !important;
      }
  
      /* Links stilisieren */
      a {
        color: rgb(90, 90, 95);
        text-decoration: underline;
      }
  
      /* Externe URLs im PDF ausblenden */
      @media print {
        a[href]:after {
          content: none !important;
        }
      }
    `
  });
  

  // Füge Styles hinzu, um das Layout für das PDF anzupassen
  // await page.addStyleTag({
  //   content: `
  //     /* Schriftgrößen anpassen */
  //     h1 { font-size: 16pt !important; }
  //     h2 { font-size: 16pt !important; }
  //     h3 { font-size: 14pt !important; }
  //     body, p {
  //       font-size: 10pt !important;
  //       line-height: 1.4;
  //       margin: 0;
  //       padding: 0;
  //     }

  //     /* GitHub Pages Header/Footer ausblenden */
  //     .site-header, .site-footer {
  //       display: none !important;
  //     }

  //     /* Weniger Abstand vor/nach Überschriften */
  //     h1, h2, h3, h4, h5, h6 {
  //       margin-top: 0.8em;
  //       margin-bottom: 0.4em;
  //     }

  //     /* Weniger Abstand zwischen Absätzen */
  //     p {
  //       // margin-top: 0.2em;
  //       // margin-bottom: 0.5em;
  //       margin-top: 0.1em;
  //       margin-bottom: 0.3em;
  //     }

  //     /* Weniger Abstand bei Listen */
  //     ul, ol {
  //       margin-top: 0.2em;
  //       margin-bottom: 0.5em;
  //     }

  //     /* Tabellen kompakter darstellen */
  //     table {
  //       margin: 0.5em 0;
  //       border-collapse: collapse;
  //     }

  //     th, td {
  //       padding: 3px 6px;
  //     }

  //     /* Weniger Abstand bei Bildern und Blöcken */
  //     img, blockquote, pre, code {
  //       margin: 0.5em 0;
  //     }

  //     /* Kartenhöhe anpassen */
  //     .leaflet-container {
  //       height: 250px !important;
  //     }

  //     /* Bilder zentrieren und Höhe begrenzen */
  //     p > img, div > img {
  //       display: block;
  //       margin-left: auto;
  //       margin-right: auto;
  //       max-height: 250px !important;
  //     }

  //     /* Links stilisieren */
  //     a {
  //       color: rgb(105, 105, 108);
  //       text-decoration: underline;
  //     }

  //     /* Externe Link-URLs im PDF unterdrücken */
  //     @media print {
  //       a[href]:after {
  //         content: none !important;
  //       }
  //     }
  //   `
  // });

  // PDF generieren
  await page.pdf({
    path: 'madelaine_v2.pdf',
    format: 'A4',
    printBackground: true,
    margin: {
      top: '1.5cm',
      bottom: '1.5cm',
      left: '2cm',
      right: '2cm',
    }
  });

  await browser.close();
  console.log('✅ PDF gespeichert als output_final.pdf');
})();
