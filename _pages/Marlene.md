---
title: "Bericht von Marlene Arnold"
permalink: /Marlene/
toc: true
toc_label: "Inhaltsverzeichnis"
author_profile: true
author:
  name     : "Marlene Arnold"
  bio      : "M.Sc. Geodäsie und Geoinformatik"
  location : "Hamburg, Germany"
  links:
    - label: "GitHub"
      icon: "fab fa-fw fa-github"
      url: "https://github.com/marlene-winny"


excerpt: "Ohlendorff’sche Villa - Vom Modell zur VR-Visualisierung"
header:
  overlay_image: "/assets/images/MWA/logo_ohlendorffsche_NEU.png"
  caption: "Bildquelle: [**ohlendorffsche.de**](https://ohlendorffsche.de/)"
  overlay_filter: 0.5

---

# 1. Einleitung
In den letzten Jahrzehnten hat die Idee von Virtueller Realität (VR) an Bedeutung gewonnen und ist von einem wissenschaftlichen Konzept zu einer weit verbreiteten Technologie gewachsen. Inzwischen erlaubten spezialisierte Geräte wie VR-Headset und dazugehörigen Steuerungselementen ein immersives Erleben digitaler Welten. Die Bedeutung dieser Technologie wächst kontinuierlich und findet Anwendung in einer Vielzahl von Bereichen, darunter Medizin, Bildung, Industrie und Unterhaltung (Slater & Sanchez-Vives, 2016)[^1]. Im Rahmen des Kursen 3D-Visualisierung, sollen die Studierenden ihre Kenntnisse in der Modellierung und dreidimensionalen Visualisierung von Geodaten ausbauen. Ziel ist dabei die interaktive Begehung eines Gebäudes, das in eine ebenfalls modellierte und gestaltete Umwelt eingebettet ist. Der Vorteil einer 3D-Visualisierung von Geodaten liegt in der realitätsnahen Darstellung komplexer räumlicher Strukturen und erweitert die Analysemöglichkeiten in Bereichen wie Stadtplanung, Umweltmonitoring und Geowissenschaften. Für Geoinformatik-Studierende ist es daher vorteilhaft, sich mit diesen Technologien auseinander zu setzen, um eine Grundlage für fundierte Entscheidungen zu bieten.
{: style="text-align: justify;"}
Unter Virtueller Realität versteht man eine computergenerierte Umgebung, die die physische Welt simuliert bzw. erweitert oder eine erfundene Welt darstellt und eine immersive Erfahrung in dieser Welt ermöglicht. Nutzerende erleben VR durch spezielle Endgeräte wie Head-Mounted Displays (HMDs), die 3D-Bilder mit hoher Bildwiederholrate anzeigen, sowie durch Bewegungssensoren, die Interaktionen in Echtzeit erfassen. Ein zentrales Merkmal einer VR-Anwendung ist die Immersion, also das Gefühl, vollständig in der virtuellen Umgebung zu sein. Dies wird durch visuelle, auditive und haptischer Reize verstärkt (Burdea & Coiffet, 2003)[^2]. 
{: style="text-align: justify;"}
Die ersten Ideen der VR lassen sich im 19. Jahrhundert finden. Bereits 1838 entwickelte Sir Charles Wheatstone das Stereoskop, das durch zwei leicht versetzte Bilder eine dreidimensionale Wahrnehmung erzeugte (Wheatstone, 1838)[^3].
Die Grundlagen für moderne VR-Systeme wurden in den 1960er Jahren von Ivan Sutherland gelegt, der das "Ulimate Display" entwickelte. Dieses gilt als Vorläufer für moderne VR-Technologien. Das 1968 entwickelte Head-Mounted Display gehörte zu den ersten Geräten, mit denen es möglich war, computergenerierte Bilder in Echtzeit zu visualisieren. Schon damals nannte Sutherland Immersion und Interaktivität als zentrale Elemente der VR (Sutherland, 1968)[^4]. 
{: style="text-align: justify;"}
In den 1980er Jahren wurde ein weiterer entscheidender Fortschritt erreicht, als Jaron Lanier mit seinem Unternehmen VPL Research die ersten kommerziellen VR-Systeme entwickelte, darunter auch Datenhandschuhe und VR-Brillen (Burdea & Coiffet, 2003)[^2]. Dennoch waren diese technologischen Innovationen im Bereich der VR aufgrund der mangelnden Rechenleistung nicht massentauglich. Das änderte sich erst in den 2010er Jahren, als durch gestiegene Rechenleistungen und kostengünstigere Sensorik eine massenhafte Verbreitung ermöglicht wurde. Seitdem wurden weitere Fortschritte erzielt, insbesondere in den Bereichen Computergraphik, Sensorik und Mensch-Maschine-Interaktion. Die Entwicklung leistungsfähigerer Computer und fortschrittlicher Display-Technologien ermöglichte realistischere und immersivere VR-Erfahrungen (Grasnick, 2020)[^5]. 
{: style="text-align: justify;"}
Moderne VR-Technologien basieren auf einer Kombination aus Hochleistungscomputergrafik, Bewegungserkennung und immersiven Audio- sowie haptischen Rückmeldesystemen (LaValle, 2017)[^6]. Die wichtigsten Komponenten eines VR-Systems sind:
{: style="text-align: justify;"}
- **Head-Mounted Displays (HMDs)**: Diese Geräte projizieren stereoskopische Bilder mit hoher Bildwiederholrate und niedriger Latenz, um Motion Sickness zu reduzieren.
- **Bewegungserfassung**: Durch Inside-Out-Tracking oder externe Sensoren werden Kopf- und Handbewegungen in Echtzeit erfasst.
- **Interaktive Eingabegeräte**: Controller oder Handschuhe mit haptischem Feedback ermöglichen die Manipulation virtueller Objekte.
- **Rendering-Engines**: Software-Plattformen wie Unreal Engine oder Unity ermöglichen die realitätsnahe Darstellung virtueller Welten.
{: style="text-align: justify;"}
Die Einsatzmöglichkeiten der VR-Technologie sind vielfältig und reichen von medizinischen Anwendungen über industrielle Nutzung bis hin zur Unterhaltung.
{: style="text-align: justify;"}
- **Medizinische Anwendungen**: VR wird in der Medizin zur Schmerztherapie, Behandlung von Angststörungen und für chirurgische Simulationen genutzt. Durch realitätsnahe Trainingssimulationen können Mediziner in einer sicheren Umgebung üben (Rizzo & Koenig, 2017)[^7].
- **Bildung und Training**: Immersive Lernumgebungen ermöglichen es Schülern und Studierenden, historische Ereignisse nachzuerleben oder komplexe Prozesse zu visualisieren (Freina & Ott, 2015)[^8].
- **Industrie und Design**: In der Produktentwicklung und Architektur wird VR zur Prototypenerstellung eingesetzt, wodurch Entwicklungszyklen verkürzt werden (Whyte et al., 2018)[^9].
- **Unterhaltung**: Die Spieleindustrie treibt die Weiterentwicklung von VR maßgeblich voran. Plattformen wie Oculus Quest oder PlayStation VR bieten ein intensives Spielerlebnis mit interaktiven Elementen (Zyda, 2005)[^10].
- **Psychologie und Therapie**: VR wird zunehmend zur Behandlung posttraumatischer Belastungsstörungen (PTBS) und anderer psychischer Erkrankungen genutzt (Gonçalves et al., 2020)[^11].
{: style="text-align: justify;"}
Die Virtuelle Realität hat sich von einem experimentellen Konzept zu einer vielfältig genutzten Technologie in diversen Anwendungsbereichen entwickelt. Wie die vorangegangene Entwicklung zeigt, wird aufgrund der Weiterentwicklung von Hardware und Software auch zukünftig Fortschritte bei den VR-Systemen zu verzeichnen sein. Insbesondere die Integration von VR mit anderen Technologien wie Augmented Reality (AR) und Künstlicher Intelligenz (KI) wird neue Möglichkeiten eröffnen (Knoll & Stieglitz, 2022)[^12]. 
{: style="text-align: justify;"}
Ausgehend von dieser grundlegenden Einführung in das Themenfeld der Virtuellen Realität wird im folgenden Bericht die konkrete Umsetzung des Projekts erläutert. Dabei wird als erst auf das gewählte 3D-Modell eingegangen, bevor das Konzept und die narrative Idee unseres Projekts vorgestellt wird. Daraufhin werden Modellierung und Texturierung genau beleuchtet, die verstärkt in diesem Bericht behandelt werden. Es folgt die Umsetzung innerhalb einer Game Engine, inklusive der Gestaltung der Außenwelt und der Interaktionen. Diese Kapitel werden jedoch ausführlicher in den Berichten von [Jonathan Hecht](https://jp-hecht.github.io/3DVIS/Jonathan/) und [Madelaine Linek](https://jp-hecht.github.io/3DVIS/Madelaine/) behandelt. Schlussendlich werden noch die Herausforderungen und Limitationen beleuchtet sowie ein Fazit gezogen. 
{: style="text-align: justify;"}

# 2. Objekt
Es standen drei mögliche Objekte für das Projekt zur Auswahl: die Ohlendorff'sche Villa, das Schloss Agathenburg und die Horneburg. Die Entscheidung für die Ohlendorff'sche Villa wurde aufgrund Datenverfügbarkeit und der flexiblen Gestaltungsmöglichkeiten getroffen. Die Daten, die uns zu diesem Objekt zur Verfügung gestellt wurden, sind im Rahmen verschiedener Kurse an der HafenCity Universität aufgenommen und anschließen modelliert worden.
{: style="text-align: justify;"}
Bei der Ohlendorff'schen Villa handelt es sich um eine denkmalgeschützte Villa aus dem Jahr 1929, die in Hamburg Volksdorf steht ([Übersichtskarte](#map1)). Auf dem Gelände, wo zuvor die Villa seines Vaters gestanden hatte, ließ Hans von Ohlendorff 1929 das zweigeschossige Gebäude im Stil des Neoklassizismus erbauen. Die Villa diente nach der Erbauung der Familie Ohlendorff als Einfamilienhaus ebenso wie Hans von Ohlendorff als Repräsentationsgebäude. Aus diesem Grund ist die Vorderseite des Gebäudes mit einem hervorgehobenen Portal und einem Erscheinungsbalkon auf ein imposantes Erscheinungsbild ausgerichtet. Die Rückseite des Gebäudes, an die der Garten angrenzt, zeichnet sich durch einen asymmetrischen Wintergartenvorbau aus. Durch das hohe Kellergeschoss war dennoch eine Distanz zwischen Garten und Wohngebäude vorhanden. Um die Villa herum befindet sich ein Park, der ebenfalls Teil des Geländes ist. Im Jahre 1953 verkaufte Hans von Ohlendorff die Villa an die Stadt Hamburg, welche darauf hin bis 2006 als Ortsamt für Volksdorf genutzt wurde. Nachdem das Gebäude unter Denkmalschutz gestellt wurde und einer entsprechenden Sanierung, wird die Villa seit 2014 von der "Stiftung Ohlendorff'sche Villa" verwaltet. Heute befinden sich ein Café, ein Kinderhort und mehrere Tagungsräume in dem Gebäude (*Die Ohlendorff'sche Villa*, o.J.)[^13].
{: style="text-align: justify;"}
<div class="content-container">
    <div id="map" class="map-container"></div>
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var map = L.map('map').setView([53.648437464598516, 10.165957827843153], 15);

            L.tileLayer.wms('https://sgx.geodatenzentrum.de/wms_basemapde', {
                layers: 'de_basemapde_web_raster_grau',
                format: 'image/png',
                transparent: true,
                attribution: '&copy; GeoBasis-DE / BKG (2025)'
            }).addTo(map);
            var marker = L.marker([53.648437464598516, 10.165957827843153]).addTo(map);
        });
    </script>
</div> 
*Karte 1: Verortung der Ohlendorff'sche Villa in Volksdorf.*
{: #map1}

## Daten
Damit das Ergebnis dieses Projektes, die VR-Anwendung eine realistische und immersive Erfahrung ermöglicht, ist eine sorgfältige Erfassung der Daten sowie eine Optimierung dieser erforderlich. Hochwertige 3D-Modelle, detaillierte Texturen und konsistente Daten sind essenziell, um eine glaubwürdige visuelle Darstellung sicherzustellen (Slater & Sanchez-Vives, 2016)[^1].
Die Erfassung von 3D-Objekten kann manuell in einer Modellierungssoftware erfolgen, erfordert jedoch Fachkenntnisse und Zeit. Alternativ bieten photogrammetrische Verfahren oder Laserscanning-Technologien eine automatisierte Erfassung realer Objekte in Form von Punktwolken. Diese können daraufhin genutzt werden, um 3D-Modelle zu generieren (Whyte et al., 2020)[^9]. Prozedurale Generierungsmethoden ermöglichen zudem die automatische Erstellung komplexer Strukturen, sind jedoch oft weniger detailliert (Hermann, 2019)[^14].
Nach der Erfassung müssen die 3D-Modelle für VR optimiert werden. Dies umfasst die Reduktion der Polygonanzahl zur Verbesserung der Performance, das Backen von Texturen sowie den Einsatz von Level-of-Detail-Techniken (Dörner et al., 2019)[^15].
{: style="text-align: justify;"}
Die zur Verfügung gestellten Daten für das Modell der Ohlendorff'schen Villa enthielten eine FBX-Datei, Informationen zu den Maßen des Gebäudes und der einzelnen Räume, Metadaten (DWG-Datei), sowie eine virtuelle Tour und verschiedenste Bilder. Im weiteren Fortlauf des Projektes wurde hauptsächlich mit der FBX-Datei (siehe Modell 1) gearbeitet. 
{: style="text-align: justify;"}

<model-viewer 
    src="{{ site.url }}{{ site.baseurl }}/assets/model/OhlendorffscheVilla.glb"
    alt="3D model"
    camera-controls 
    auto-rotate
    exposure="1"
    shadow-intensity="1"
    ar
    style="width: 100%; height: 40vh;">
</model-viewer>
*Modell 1: Das bereitgestellte FBX-Modell der Ohlendorff'schen Villa in Volksdorf*


Wie in der Darstellung zu erkennen, lässt sich die FBX-Datei in Blender öffnen und betrachten. Auf den ersten Blick wirkt das Modell passend und mit der Realität übereinstimmend. Auch im Vergleich mit den Fotos, lässt sich das Modell als zutreffend bewerten. Bei näherer Betrachtung fällt jedoch auf, dass das Modell an einigen Stellen unsauber ist. Zum Beispiel ist zwischen Eingangsportal und Hauswand eine nicht unerhebliche Lücke. Außerdem sind die Fenster an der westlichen Hauswand nicht passend in die Aussparungen der Hauswand eingefügt worden, so sind auch hier Lücken zwischen Hauswand und Fensterrahmen zu finden. Ein weiteres Beispiel für die Mängel der Modellierung ist das Dachgesims an der Nordseite des Gebäudes, welches nicht die Verzierungen wie an der anderen Seiten besitzt, und zusätzlich, vermutlich durch die Überlagerungen mehrerer Objekte, ein Flackern aufweist.
{: style="text-align: justify;"}

<img src="{{ site.baseurl }}/assets/images/MWA/Eingang.png" alt="Fehler: Eingangsportal">
*Abbildung 1: Fehlerhafte Modellierung Eingangsportal*

<img src="{{ site.baseurl }}/assets/images/MWA/Fenster.png" alt="Fehler: Fenster">
*Abbildung 2: Fehlerhafte Modellierung Fenster*

<img src="{{ site.baseurl }}/assets/images/MWA/Stuck_Dach.png" alt="Fehler: Dachgesims">
*Abbildung 3: Fehlerhafte Modellierung Dachgesims*

Insgesamt stellen das Modell eine gute Grundlage dar, um damit ein 3D-Objekt zu entwickeln, das für die VR-Anwendung genutzt werden kann, da das große (übergeordnete) Erscheinungsbild des Gebäudes mit der Realität übereinstimmt. Gleichzeitig ist noch Modellierungsarbeit nötig, um die beschriebenen Mängel des Modelles auszubessern, damit die finale VR-Anwendung ein realistisches und immersives Ergebnis erzielt. 
{: style="text-align: justify;"}

# 3. Konzept
Das Projektziel war, die Ohlendorff'sche Villa in einer virtuellen Welt immersiv und interaktiv zu erleben. Aus diesem Grund wurde die Villa in das Zentrum der VR-Szene gestellt. Angelehnt an die Darstellung digitaler Geländemodelle als Block ([Beispiel](https://www.researchgate.net/figure/Digital-Elevation-Model-DEM-3D-Elevation-Model-and-3D-Realistic-Model-of-the-combined_fig1_268074280)) wird die Idee einer stilisierte 3D-Karte verfolgt, die einen kleinen Ausschnitt der realen Welt auf einer Scheibe darstellt. Daraus abgeleitet ergibt sich, dass neben der Villa im Zentrum der VR-Szene auch die reale Umwelt, zu einem gewissen Umfang, dargestellt wird. In direkter Nähe zu der Villa befindet sich ein großer Park sowie einige Wohngebäude. Aus diesen Gegebenheiten hat sich die Entscheidung ergeben, dass eine Scheibe die Grundlage für die Szene bildet. So enthält der dargestellte Ausschnitt neben der Villa die wesentlichen Wege, Straßen und umstehenden Gebäude in einer abstrahierten, kartografisch inspirierten Form. Dies ist eine Möglichkeit bekannte Karten, wie Google Maps oder OpenStreetMap, in einer 3D-Umgebung darzustellen und Nutzenden ein Verhältnis der Größenrelationen zu bieten. Die Darstellung kombiniert dabei realistische und abstrahierte Elemente, um Erkennbarkeit der Wirklichkeit und künstlerischer Freiheit zu vereinen. 
Zentrales Element dieser Visualisierung ist die realitätsnah modellierte Ohlendorff'sche Villa, die mittig auf der Scheibe platziert ist. Während das Gebäude in Bezug auf Architektur und Texturierung detailliert gestaltet ist, werden die umstehenden Gebäude in einer vereinfachenden Level-of-Detail-1-Darstellung abgebildet, also mit reduzierter geometrischer Komplexität. Zusätzlich wurden gestaltende Elemente wie Vegetation oder Autos in einem Low-Poly-Stil in die Szene eingefügt. Dies hebt die Villa als Augenmerk der Visualisierung hervor und macht den bewusst gewählten Stilkontrast innerhalb der Visualisierung deutlich. Diese reduzierten Modelle der Außenwelt verstärken den Gegensatz zwischen der detaillierten Texturierung der Villa und der stilisierten Umgebung, was dem zugrundeliegenden Konzept folgt.
{: style="text-align: justify;"}

<model-viewer 
    src="{{ site.url }}{{ site.baseurl }}/assets/model/BaseFill.glb"
    alt="3D model"
    camera-controls 
    auto-rotate
    exposure="1"
    shadow-intensity="1"
    ar
    style="width: 100%; height: 40vh;">
</model-viewer>
*Modell 2: Vollständiger Außenbereich der VR Applikation zur Ohlendorff'schen Villa in Hamburg Volksdorf. Erneut wurde die Villa ausgelassen. Die Artefakte konnten in der finalen VR Applikation nicht beobachtet werden.*

Die Idee einer stilisierten 3D-Karte verbindet klassische kartografische Prinzipien mit modernen Möglichkeiten der dreidimensionalen Visualisierung. Im Gegensatz zu klassischen zweidimensionalen Karten, die eine Abstraktion der Realität wiedergeben, wird bei dreidimensionalen Karten eine weitere Informationsebene eingeführt. Hierbei können gezielt bestimmte Objekte hervorgehoben, Maßstäbe verzerrt oder Details reduziert werden, um die Wahrnehmung zu steuern (Jobst & Germanchis, 2007)[^16]. Die für das Projekt gewählte Methodik nutzt diese Prinzipien, indem sie eine schematische Umgebung mit einem realistisch modellierten zentralen Objekt kombiniert. Ein solcher Ansatz findet sich in verschiedenen Bereichen wieder, darunter Stadtplanung, Architekturvisualisierung und digitale Museumslandschaften (Kraak & Ormeling, 2013)[^17].
{: style="text-align: justify;"}
Die Villa im Zentrum der Szene wurde bewusst detaillierter gestaltet als die Umgebung. Sie orientiert sich in ihrer Form an dem realen Bauwerk, wobei die Texturen nicht der tatsächlichen Erscheinung entsprechen, sondern stilistisch an die gewählte Erzählung angepasst wurden. Während einige Bereiche bewusst heruntergekommen wirken, finden sich an anderen Stellen luxuriöse Materialien wie Marmor, um eine geheimnisvollere Atmosphäre zu schaffen.
Die Gestaltung des Gebäudes soll dabei die Erzählung unterstützen, dass die Villa als versteckter Ort für wertvolle Kunstgegenstände dient. Durch die Nutzung von Texturen, die neben Verfall auch Exklusivität darstellen, wird ein Ort geschaffen, der sowohl Geheimnisse birgt als auch den Reichtum der ausgestellten Objekte widerspiegelt. Der eingebaute Tag-Nacht-Modus unterstützt ebenfalls die geheimnisvolle Atmosphäre, wenn in der Nacht nicht mehr alle Gegenstände in der Villa beleuchtet sind.
{: style="text-align: justify;"}
Das Innere der Villa ist in zwei thematische Räume unterteilt:
- **Das Musikzimmer**: 
In diesem Raum sind verschiedene Musikinstrumente aus unterschiedlichen Teilen der Welt ausgestellt. Die Auswahl spiegelt eine kulturelle Vielfalt wider und lädt dazu ein, sich mit internationalen Klängen auseinanderzusetzen.
- **Das Kunstzimmer**:
Hier werden fünf berühmte, aber verschollene oder gestohlene Kunstwerke ausgestellt, inklusive Informationsplakaten, die die Besonderheiten der jeweiligen Kunstwerke präsentieren. Dies verstärkt die narrative Komponente des Projekts: Die Villa dient als geheimer Aufbewahrungsort für wertvollen Werke. Die Gestaltung des Raumes mit hochwertigen Materialien wie Marmor schafft eine Umgebung, die dem Wert der ausgestellten Objekte gerecht wird, während andere Elemente bewusst abgenutzt wirken, um die mysteriöse Atmosphäre zu schaffen.
{: style="text-align: justify;"}
Das Projekt setzt sich zusammen aus eine kartographischen Basis, die bewusst reduziert wurde und einer realistischen Darstellung der Ohlendorff'schen Villa mit großer Detailtiefe, um eine einzigartige 3D-Visualisierung zu kreieren. Durch den Kontrakt entsteht eine besondere, einzigartige Ästhetik. Gleichzeitig wird das Projekt durch die Innenraumgestaltung der Villa um eine sinnstiftende Erzählung erweitert, die das visuelle Konzept ergänzt und vertieft.
{: style="text-align: justify;"}

# 4. Möglichkeiten zur VR-Umsetzung
Die Entwicklung einer VR-Anwendung erfordert eine strukturierte Vorgehensweise, die von der Datenaufbereitung über die Modellierung bis hin zur Implementierung und Interaktionsgestaltung reicht. In diesem Kapitel werden die theoretischen Grundlagen sowie der spezifische Workflow für unser Projekt beschrieben, um die methodische Herangehensweise nachvollziehbar zu machen.
{: style="text-align: justify;"}
## Theorie
Die Erarbeitung einer VR-Anwendung gliedert sich normalerweise in folgende Teilaufgaben: Datenaufbereitung, Modellierung, Implementierung in Game Engine und Interaktionsgestaltung.
{: style="text-align: justify;"}
Zunächst erfolgt die Datenakquise und -aufbereitung, bei der relevante 3D-Modelle, Geodaten oder CAD-Daten gesammelt, bereinigt und in ein kompatibles Format umgewandelt werden. Hierbei kommen häufig GIS-Software wie QGIS oder ArcGIS zum Einsatz, wenn georeferenzierte Daten genutzt werden, während CAD-Daten mit Programmen wie AutoCAD oder Rhino verarbeitet werden. Eine Herausforderung in dieser Phase besteht in der Datenkonvertierung zwischen unterschiedlichen Formaten, da nicht alle Softwarelösungen dieselben Standards unterstützen. Zudem müssen hoch detaillierte Modelle oft vereinfacht werden, um eine flüssige Darstellung in Echtzeit zu ermöglichen (Helmholz et al., 2020)[^18].
{: style="text-align: justify;"}
Anschließend folgt die Modellierung und Optimierung der virtuellen Umgebung. 3D-Modelle werden in Software wie Blender, Autodesk Maya oder 3ds Max erstellt und für die Echtzeitdarstellung optimiert. Hierbei kommen Polygonreduktion, Normal Mapping oder Level-of-Detail-Techniken (LOD) zum Einsatz, um die Performance zu verbessern. Eine häufige Schwierigkeit in dieser Phase ist das Balancieren zwischen Detailreichtum und Performance, da hochauflösende Modelle die Rechenleistung stark beanspruchen können (Luebke et al., 2002)[^19].
{: style="text-align: justify;"}
Nach der Modellierung wird die Szene in eine Game Engine wie Unreal Engine oder Unity importiert. Beide Engines bieten leistungsstarke Werkzeuge für VR-Entwicklung, wobei Unreal Engine aufgrund der grafischen Qualität und integrierten Physiksimulation bevorzugt wird, während Unity für seine Flexibilität und plattformübergreifende Kompatibilität geschätzt wird. Herausforderungen in dieser Phase bestehen in der richtigen Implementierung von Beleuchtung und Performance-Optimierung, da VR-Anwendungen eine stabile Framerate (mindestens 90 FPS) benötigen, um Motion Sickness zu vermeiden (LaValle, 2017)[^6].
{: style="text-align: justify;"}
Im nächsten Schritt erfolgt die Interaktionsgestaltung, bei der Steuerungsmethoden für VR-Controller, Hand-Tracking oder Blicksteuerung integriert werden. Hierbei werden spezielle Software Development Kits (SDKs) wie OpenXR, SteamVR oder Oculus SDK genutzt, um die Hardwarekompatibilität sicherzustellen. Eine der größten Herausforderungen ist dabei die intuitive Interaktionsgestaltung, da klassische Eingabemethoden wie Maus und Tastatur in VR nicht anwendbar sind und Benutzerfreundlichkeit eine zentrale Rolle spielt (Slater & Sanchez-Vives, 2016)[^1].
{: style="text-align: justify;"}

## Entwicklungsumgebung
Aus dem dargestellen theoretischen Workflow, wurde folgender konrekter Workflow für unser Projekt abgeleitet. 
{: style="text-align: justify;"}
![alt]({{ site.url }}{{ site.baseurl }}/assets/images/JPH/workflow_3d_con.drawio.svg)
*Abbildung 4: Konkretisierung des theoretischen Workflows für die Entwicklung einer VR Anwendung über die Ohlendorff'sche Villa*

Die Basis unseres Projekts bilden Daten, die entweder von der Kursleitung bereitgestellt oder selbstständig modelliert wurden sowie Modellen, die kostenlos im Internet verfügbar sind. Für die Zusammenführung dieser unterschiedlichen Daten und die Modellierung wurde die Software Blender genutzt. Bei Blender handelt es sich um eine Open-Source-Software, die für die Betriebssysteme Linux, Windows und macOS zur Verfügung steht, was in unserer Gruppe wichtig war, damit alle mit der Software arbeiten konnte. So konnten auch Kompatibilitätsprobleme vermieden werden. Da Blender einen sehr umfangreichen Werkzeugkasten für die Erstellung und Bearbeitung von 3D-Graphiken bereitstellt, haben wir uns entschieden auch die Texturen in Blender zu bearbeiten. Zusätzlich wurden die Erweiterungen BlenderGIS und Rigacar genutzt. Hierzu finden sich weiterführende Informationen in dem Bericht von Jonathan Hecht. Ergebnis dieser Datenaufbereitung in Blender war ein Modell, dass für die Implementierung in einer Game Engine ausgerichtet war und keiner weiteren Veränderung bedurfte. 
{: style="text-align: justify;"}
Für die Erstellung einer virtuellen Realität wurde die Unreal Engine 5.X des Entwicklers Epic Games von der Kursleitung vorgegeben. Wie Blender kann die Software kostenlos heruntergeladen werden und eignet sich gut für die Erstellung von VR-Anwendungen. Hier lassen sich auch Interaktionen für die VR-Anwendung mithilfe von Blueprints erstellen, die am Ende ein immersives Erlebnis schaffen (Epic Games, 2023)[^20]. Ein weiter wichtiger Punkt ist, dass Unreal Engine kostenlos verfügbar ist und entsprechend eine umfangreiche Community bietet, die zahlreiche Informationen und Beispiele online zur Verfügung stellen, die die Entwicklung einer VR-Anwendung unterstützen. Unreal Engine wurde für die Ambientegestaltung sowie für alle Interaktionen genutzt. Seitens der Universität wurde eine HTC Vive Pro zur Verfügung gestellt. Da Unreal Engine dieses Headset unterstützt, war die Kompatibilität mit dieser Hardware kein Problem. StreamVR wurde genutzt, um das Projekt auf die HTC Vive Pro zu übertragen und zu testen. 
{: style="text-align: justify;"}

# 5. Entwicklung der VR-Anwendung
In diesem Kapitel wird auf die konkrete Umsetzung der verschiedenen Arbeitsschritte in der Entwicklung unserer VR-Anwendung eingegangen. Dies umfasst die Modellierung, die Texturierung, einschließlich Innenraumgestaltung, die Gestaltung der Außenwelt inklusive Beleuchtung und Ambiente sowie die Interaktionen.
{: style="text-align: justify;"}

## Modellierung
Die Modellierung der Villa erfolgte in Blender, wobei die Grundstruktur des Gebäudes bereits vorhanden war ([Daten](https://jp-hecht.github.io/3DVIS/Marlene/#daten)). Der Fokus der weiteren Arbeit lag daher auf der Behebung kleinerer Unstimmigkeiten sowie der Verfeinerung der Geometrie, um ein möglichst realistisches Modell zu schaffen.
Wie bereits im Kapitel Daten beschrieben, wies das 3D-Modell der Ohlendorff'schen Villa einige kleinere Unstimmigkeiten auf. Zunächst wurden Lücken zwischen verschiedenen Geometrien, wie beispielsweise zwischen dem Eingangsportal und der Gebäudewand, geschlossen. In einigen Fällen war es ausreichend, die Position der Geometrien leicht zu justieren, während an anderen Stellen gezielt Anpassungen an den Geometrien vorgenommen wurden. So wurden etwa die Lücken zwischen Fensterrahmen und Gebäudewand durch das gezielte Verschieben einzelner Vertices sowie durch Anpassungen der Skalierung entlang der Achsen im Modellierungsprogramm behoben.
Des Weiteren wurden vier Fenster entfernt, die in das Dachmodell integriert worden waren. Die ursprünglich vorhandenen Fenster bestanden aus Volumenkörpern, die lediglich an den jeweiligen Positionen auf dem Dach platziert worden waren, ohne dass entsprechende Öffnungen im Dachmodell selbst existierten. Zudem waren an mehreren Gebäudeseiten die Fensterscheiben als eigenständige Volumenkörper modelliert, was in einigen Fällen dazu führte, dass sich zwei oder mehr überlappende Fensterscheiben an derselben Öffnung befanden. Diese überflüssigen Geometrien wurden entfernt, um eine saubere Modellstruktur zu gewährleisten.
Darüber hinaus wurde das Dachgesims an der Eingangsseite der Villa überarbeitet. Hierbei wurden Überlappungen zwischen der Gebäudewand und dem Gesims beseitigt, sodass eine konsistente und stimmige Architektur entstand. Zudem wurde im Erdgeschoss eine zusätzliche Innenwand modelliert, wodurch der offene Bereich in eine kleine Eingangshalle und zwei annähernd gleich große Räume unterteilt wurden. Diese dienten später als Kunst- und Musikraum.
Zum Abschluss wurde eine Eingangstreppe hinzugefügt, um den Zugang zur Villa innerhalb der VR-Umgebung zu ermöglichen. Da die Außenwelt konzeptionell auf einer flachen Plattform mit keinen Höhenunterschieden angelegt wurde, war die Schaffung eines angepassten Eingangsbereichs erforderlich. Diese Herausforderung wurde durch die Modellierung der Treppe gelöst.
{: style="text-align: justify;"}
Aufgrund der begrenzten Projektzeit und der vielfältigen weiteren Aufgaben im Rahmen der VR-Entwicklung wurde entschieden, kleinere Unstimmigkeiten am Modell in Kauf zu nehmen. Dieser pragmatische Ansatz ermöglichte es, sich auf nachfolgende Arbeitsschritte zu konzentrieren und die Modellierung effizient abzuschließen, ohne dass die finalen immersiven Qualitäten der VR-Anwendung erheblich beeinträchtigt wurden. 
{: style="text-align: justify;"}

## Texturierung
Für realistische und immersive VR-Anwendungen sind Texturen von großer Bedeutung. Durch Texturen werden 3D-Objekten Oberflächenmerkmale wie Farben, Muster und Materialeigenschaften verliehen, wodurch diese Objekte in der VR-Anwendung glaubwürdiger und ansprechender wirken.
Durch den Einsatz von Techniken wie Texture Mapping, Bumpmapping und Parallax Mapping können Oberflächenstrukturen simuliert werden, die dem Betrachter das Gefühl vermitteln, sich in einer realen Umgebung zu befinden. Diese Methoden werden genutzt, um Details wie Rauheit, Glanz oder Unebenheiten darzustellen, ohne dass die Geometrie des Modells verändert werden muss. 
Texture Mapping ist eine zentrale Technik in der Computergrafik, die es ermöglicht, zweidimensionale Bildinformationen (Texturen) auf dreidimensionale Modelle zu projizieren. In VR-Anwendungen trägt Texture Mapping entscheidend dazu bei, die visuelle Echtheit der VR-Umgebung zu steigern. Durch die präzise Platzierung von Texturen auf 3D-Modellen können spezifische Materialien wie Holz, Metall oder Stein realistisch nachbildet werden. Ein wichtiger Aspekt des Texture Mappings ist das UV-Mapping. Hierbei wird die Oberfläche eines 3D-Modells auf eine zweidimensionale Ebene "abgewickelt", um die Textur passgenau aufzubringen. Dieser Prozess stellt sicher, dass die Textur ohne Verzerrungen oder Unstimmigkeiten auf dem Modell erscheint, was für die visuelle Qualität unerlässlich ist  (Dörner et al., 2019)[^15].
{: style="text-align: justify;"}
Da mit der Modellierung schon eine Einarbeitung in Blender erfolgte, haben wir uns entschieden, die Texturierung ebenfalls mit Blender zu machen. Ein großer Vorteil von Blender bei der Texturierung ist, dass ein Objekt mehrere Texturen aufweisen kann. Dafür können die einzelnen Faces ausgewählt und diesen eine bestimmte Textur zugewiesen werden. 
Um realitätsnahe Texturen zu schaffen, wurden frei verfügbare Texturen verwendet, die verschiedene Material- und Texturdaten enthielten, die in Blender importiert und gezielt auf 3D-Objekte angewendet wurden. Zu den wichtigsten Texture-Maps, die in diesem Projekt eingesetzt wurden, gehören:
{: style="text-align: justify;"}
- **Color Map** – Die Grundfarbtextur des Materials, welche das visuelle Erscheinungsbild der Oberfläche bestimmt.
- **Normal Map** – Enthält Informationen über die feinen Unebenheiten und Oberflächenstrukturen, ohne die Geometrie selbst zu verändern.
- **Roughness Map** – Steuert den Reflexionsgrad der Oberfläche, wobei dunklere Bereiche glänzender und hellere matter erscheinen.
- **Metallic Map** – Bestimmt, welche Bereiche der Textur metallisch erscheinen und welche nicht.
{: style="text-align: justify;"}
Diese Texturen wurden in Blender über den Shader Editor in das Materialsystem eingebunden und mit einem Principled BSDF Shader kombiniert, um eine realistische Licht- und Materialinteraktion zu erzeugen.
{: style="text-align: justify;"}
Da die importierten Texturen nicht automatisch optimal auf die 3D-Geometrie gemappt sind, musste ein manuelles UV-Mapping durchgeführt werden. Dabei wurden folgende Schritte vorgenommen:
{: style="text-align: justify;"}
- **UV Unwrapping** – Die Mesh-Oberflächen wurden entfaltet, um eine zweidimensionale Darstellung für die Texturen zu erstellen.
- **UV-Optimierung** – Durch das manuelle Verschieben der UV-Inseln in der UV-Editing-Ansicht wurde sichergestellt, dass keine Verzerrungen oder falschen Skalierungen auftraten.
{: style="text-align: justify;"}
Um sicherzustellen, dass die Texturen korrekt ausgerichtet sind, wurden verschiedene Mapping-Techniken wie Box Projection Mapping und Manual Projection Painting genutzt. Ziel der Texturierung war nicht die exakte Nachbildung der realen Oberflächen der Villa, sondern eine stilisierte, dennoch realistische Darstellung, die sich in das Gesamtkonzept der virtuellen Umgebung einfügt. Die gewählten Texturen sollten den visuellen Kontrakt zur Umgebung unterstreichen und die Villa damit in den Fokus rücken und die narrative Idee des Gesamtkonzepts unterstützen.
{: style="text-align: justify;"}

![Texturen der Villa]({{ site.url }}{{ site.baseurl }}/assets/images/MWA/villa_close_Opt.gif)
*Abbildung 5: In der Animation können unterschiedliche Texturen der Villa betrachtet werden.*

## Innenraumgestaltung
Die Innenraumgestaltung umfasst die beiden Räume, die in das 3D-Modell der Villa modelliert wurden. In dem Kunstzimmer werden verschollenen oder gestohlene Kunstwerke präsentiert und in dem Musikzimmer werden Instrumente aus der ganzen Welt ausgestellt. 
{: style="text-align: justify;"}

### Kunstzimmer
Das Kunstzimmer der Villa wurde mit besonderer Sorgfalt gestaltet, um eine Atmosphäre von Geheimnis und Entdeckung zu schaffen. An den Wänden hängen fünf bedeutende Kunstwerke, die entweder verschollen sind oder es einst waren:
{: style="text-align: justify;"}
- Fräulein Lieser von Gustav Klimt
- L'Olivier près de l'Estaque von Georges Braque
- View of Auvers-sur-Oise von Paul Cézanne
- The Painter on His Way to Work von Vincent van Gogh
- The Chorus von Edgar Degas

Neben jedem dieser Werke befindet sich ein Poster, das einen kurzen Einblick in die Geschichte des jeweiligen Gemäldes gibt und so den Besuchern Hintergrundinformationen liefert.
Zentral im Raum steht ein Untersuchungstisch, auf dem eine Lupe platziert ist. Diese lädt die Besucher dazu ein, die ausgestellten Gemälde genauer zu betrachten. Bei näherer Inspektion entdecken sie auf den fünf Bilder drei kleine Zahlen. Diese Zahlenkombination dient als Code für eine im Raum stehende Truhe. Geben die Besucher den korrekten Code ein, öffnet sich die Truhe, und das sechste Gemälde, The Concert von Johannes Vermeer, erscheint in der Truhe.
The Concert gilt als das wertvollste gestohlene Kunstwerk der Welt. Es wurde 1990 aus dem Isabella Stewart Gardner Museum in Boston entwendet und hatte 2015 einen geschätzten Wert von 250 Millionen US-Dollar (Kurkjian, 2015)[^21]. 
Diese interaktive Gestaltung des Kunstzimmers ermöglicht es den Besuchern, nicht nur die Kunstwerke zu bewundern, sondern auch aktiv an der Entdeckung des verborgenen Meisterwerks teilzunehmen.
{: style="text-align: justify;"}

![Bilck ins Kunstzimmer]({{ site.url }}{{ site.baseurl }}/assets/images/MWA/kunst_opt.gif)
*Abbildung 6: 360° Schwenk durch das Kunstzimmer.*

### Musikzimmer
Das Musikzimmer der Villa wurde so konzipiert, dass es Besuchende auf eine akustische Reise durch verschiedene Kulturen und Epochen mitnimmt. Im Mittelpunkt stehen sieben Musikinstrumente aus unterschiedlichen Teilen der Welt:
{: style="text-align: justify;"}

- **Klavier** – Ein klassisches westliches Instrument, das seit Jahrhunderten in der Kunst- und Unterhaltungsmusik eine zentrale Rolle spielt.
- **Guqin** – Ein traditionelles chinesisches Saiteninstrument mit tiefen kulturellen Wurzeln, das für seine sanften, meditativen Klänge bekannt ist.
- **Balalaika** – Ein dreisaitiges Zupfinstrument aus Russland, das durch seinen charakteristischen Klang in der Folkmusik weit verbreitet ist.
- **Djembe** – Eine westafrikanische Trommel, die in rituellen und gemeinschaftlichen Kontexten für rhythmische Dynamik sorgt.
- **Dombo** – Ein traditionelles Instrument aus Südamerika, das durch seine einzigartigen Klangfarben besticht.
- **Doncamatic** – Eine frühe elektromechanische Rhythmusmaschine aus Japan, die in der modernen Musikproduktion eine Rolle spielt.
- **Gitarre** – Ein weltweit verbreitetes Saiteninstrument, das in unzähligen Musikstilen von Klassik bis Rock eingesetzt wird.
{: style="text-align: justify;"}
Um eine immersive Erfahrung zu schaffen, reagiert der Raum dynamisch auf die Bewegungen der Besucherinnen. Sobald man sich einem der Instrumente nähert, wird eine Klangsequenz abgespielt, die das jeweilige Instrument in einem typischen musikalischen Kontext präsentiert. Dies ermöglicht ein tiefgehendes Eintauchen in verschiedene Klangwelten.
Durch diese Gestaltung wird nicht nur ein visueller, sondern auch ein auditiver Zugang zu den ausgestellten Instrumenten ermöglicht. Dies verstärkt die Immersion in der virtuellen Umgebung und lädt dazu ein, die klangliche Vielfalt verschiedener Kulturen aktiv zu erleben.
{: style="text-align: justify;"}

![Blick ins Musikzimmer]({{ site.url }}{{ site.baseurl }}/assets/images/MWA/music_opt.gif)
*Abbildung 7: 360° Schwenk durch das Musikzimmer.*

## Außenwelt
Die Außenwelt der VR-Anwendung basiert auf amtlichen Geodaten, die zunächst in QGIS aufbereitet und anschließend in Blender weiterverarbeitet wurden. Dazu gehörten Arten- und Biotopkartierungen, Straßen mit spezifischer Nutzung sowie Level of Detail II (LoD2) Gebäudedaten. Diese Daten wurden angepasst und optimiert, um eine realitätsnahe, aber performante Darstellung in der VR-Umgebung zu ermöglichen. Für die Detailgestaltung der Außenwelt wurden frei verfügbare 3D-Modelle von Bäumen, Laternen, Autos und weiteren Elementen integriert. Diese Modelle wurden in Blender modifiziert, beispielsweise durch Farbänderungen oder leichte Anpassungen der Form, um eine visuelle Vielfalt zu erzeugen, ohne die Performance negativ zu beeinflussen.  
{: style="text-align: justify;"}
Ein zentrales Feature der VR-Umgebung ist der dynamische Tag-Nacht-Rhythmus, der mithilfe einer modifizierten Version des Sun Position Calculators aus Unreal Engine umgesetzt wurde. Dieser sorgt für eine realitätsnahe Lichtveränderung im Tagesverlauf, einschließlich einer anpassbaren Himmelsatmosphäre, Sternen, Wolken und der Beleuchtung von Straßenlaternen sowie Innenräumen bei Nacht. Zusätzlich wurde ein adaptives Sounddesign integriert: Während sich Umgebungsgeräusche wie Vogelstimmen zufällig abspielen, reagiert das Windgeräusch dynamisch auf die Umgebung des Nutzenden. Hierfür wird geprüft, wie stark der VR-Pawn von Objekten umgeben ist – in offenen Bereichen ist der Wind lauter, in engen Räumen oder nah an Wänden wird er leiser.  
{: style="text-align: justify;"}
Ein weiteres immersives Element ist die Simulation von Fahrzeugbewegungen. Autos wurden mit Rigacar in Blender vorbereitet und anschließend in Unreal Engine mit einem Blueprint ausgestattet, der sie entlang von Splines steuert. Ein Markierungssystem außerhalb des sichtbaren Bereichs sorgt dafür, dass sich die Fahrzeuge logisch verhalten und ein realistischer Verkehrsfluss entsteht.  
{: style="text-align: justify;"}
Zusätzlich wurde noch die Möglichkeit zur Teleportation geschaffen. Wenn sich der Spieler in der Nähe des kleinen Heißluftballons (im Park hinter der Villa) befindet, dann wird er zum Heißluftballon teleportiert und kann die Szene aus einer ganz neuen Perspektive wahrnehmen. Zurück kommt der Spieler, wenn er in der Nähe es kleinen Hauses ist, das sich neben dem großen Heißluftballon befindet. 
Weiterführende Details zur technischen Umsetzung der Außenwelt können dem Bericht von [Jonathan Hecht](https://jp-hecht.github.io/3DVIS/Jonathan/#außenbereich) entnommen werden.
{: style="text-align: justify;"}

## Interaktionen
Ziel der Interaktionen war es, eine intuitive und immersive Nutzung der virteullen Umgebung zu ermöglichen.
{: style="text-align: justify;"}
Die Bewegung des Charakters erfolgt über den rechten HTC Vive Controller, wobei die Blickrichtung der Kamera die Laufrichtung bestimmt. Über die Funktion Add Movement Input wird der Richtungsvektor skaliert, der für die Veränderung der Koordinaten des Charakters sorgt. Dieser Mechanismus ermöglicht eine präzise Fortbewegung. Zusätzlich gibt es einen MOVE_FAST-Modus, der durch eine separate Eingabe aktiviert wird und eine schnellere Fortbewegung erlaubt, um die Außenwelt der VR-Anwendung schneller zu erkunden.
{: style="text-align: justify;"}
Die Grab-Funktion ermöglicht das Aufnehmen einer Lupe mit beiden Händen. Wird ein Objekt gegriffen, wird die physikalische Simulation deaktiviert, sodass es stabil bleibt und nicht durch äußere Einflüsse bewegt wird. Das Objekt wird dann an die jeweilige Hand des Spielers angehängt, um eine realistische Handhabung zu ermöglichen.
{: style="text-align: justify;"}
Weitere Interaktionen basieren auf kollisionsgesteuerten Mechaniken. Beispielsweise werdend die Zahlen, die auf drei Bildern versteckt sind, erst sichtbar, wenn sich der Spieler in die Nähe eines bestimmten Bereichs bewegt. Die Truhe, die ein weiteres gestohlenes Kunstwerk enthält, kann nur durch die Eingabe eines korrekten Codes geöffnet werden. Nach der erfolgreichen Eingabe wird ein akustisches Signal abgespielt, die Truhe öffnet sich und das gestohlene Gemälde wird erscheint in der Truhe.
{: style="text-align: justify;"}
Für eine detailliertere Beschreibung dieser Interaktionsmechaniken wird auf den Bericht von [Madelaine Linek](https://jp-hecht.github.io/3DVIS/Madelaine/) verwiesen.
{: style="text-align: justify;"}

## Schematische Bedinungsnaleitung der VR-Anwendung
Die nachfolgende Graphik gibt eine Übersicht über die Belegung der Controllertasten in unserem Projekt. Die Idee hinter der Belegung ist, dass der rechte Controller für die Steuerung der Bewegung zuständig ist und der linke Controller für die anderen Interaktionen genutzt wird.
{: style="text-align: justify;"}
<img src="{{ site.baseurl }}/assets/images/MWA/Kontollerbelegung.png" alt="Fehler: Kontrollerbelegung">
*Abbildung 8: Belegung der Controller-Tasten für Interaktionen in der VR-Anwendung*

# 6. Fazit & Ausblick
Mit Rückblick auf die Projektarbeit kann festgehalten werden, dass das entwickelte Konzept einer stilisierten 3D-Karte, mit Fokus auf die Villa, erfolgreich in der virtuellen Umgebung umgesetzt werden konnte. Die geplanten Interaktionsmechaniken, Bewegungssteuerungen und die Interaktionen der Objekte funktionieren wie vorgesehen, sodass die Anwendung ein immersives Erlebnis bietet.
Visuell wurde eine ansprechende Darstellung geschaffen, die sowohl stilistisch als auch funktional interessant ist. Durch den gezielten Einsatz von Texturen, Lichteffekten und detaillierten 3D-Modellen entstand eine Umgebung, die die Atmosphäre der virtuellen Welt unterstützt und den Nutzer visuell anspricht.  
Zudem weist die Anwendung eine hohe Performance auf. Trotz der grafischen und interaktiven Komplexität läuft sie flüssig und reagiert präzise auf Nutzereingaben. Lediglich einige erwartbare Warnungen innerhalb der Entwicklungsumgebung traten auf, die jedoch keine negativen Auswirkungen auf die Funktionalität oder Stabilität der Anwendung haben.
{: style="text-align: justify;"}

Neben dem positiven Fazit zum Erreichen der Konzeptidee, gibt es vielseitige Optimierungsmöglichkeiten, die in zukünftigen Projekten beachtete werden sollten. Erstens würde eine bessere Versionskontrolle helfen, Änderungen effizienter nachzuverfolgen und potenzielle Fehler frühzeitig zu erkenne. Außerdem würde es die gleichzeitige Bearbeitung des Projekts durch mehrere Personen deutlich vereinfachen. 
Zweitens liegt noch viel Potenzial in den Blueprints. Dafür wäre eine Einarbeitung in Best Practice Beispielen und ein einheitliches Setup für die Nutzung von Blueprints sinnvoll. Dies würde die strukturiere Weiterentwicklung unterstützen und die Übersichtlichkeit des Codes verbessern. Eventuell würden auch einfache Fehler, die teilweise viel Zeit kosten, vermieden werden können. Ebenso könnten einige Blueprints weiter verbessert werden, um bestimmte Mechaniken noch effizienter zu gestalten.
Ein weiterer Bereich mit Verbesserungspotenzial ist das Testen, insbesondere bei der Texturierung. Durch intensivere Tests könnten mögliche Unstimmigkeiten frühzeitig erkannt und die visuelle Qualität weiter optimiert werden. Dies gilt für den Außenbereich, in dem mögliche stilistische Anpassungen interessant gewesen wären. Andererseits für die Textur der Villa. Da die Villa in Blender texturiert wurde, war es teilweise umständlich, Texturen schnell zu überprüfen. Und durch die unterschiedlichen Lichtverhältnisse in Blender und Unreal Engine sahen machen Texturen in den beiden Programmen deutlich unterschiedlich aus. 
Zudem wäre es hilfreich, bessere Informationen für Spielerinnen bereitzustellen, um die Navigation innerhalb der VR-Anwendung zu erleichtern. Dies könnte durch gezielte Hinweise, interaktive Anleitungen oder visuelle Markierungen umgesetzt werden, um eine noch intuitivere Benutzererfahrung zu ermöglichen.
Ein wichtiger Lernpunkt aus dem Projekt ist die Bedeutung eines strukturierten Zeitmanagements. Da für uns alle die Entwicklung einer VR-Anwendung und die dafür notwendigen Softwares neu waren, wäre es hilfreich gewesen, mehr Pufferzeiten für unvorhergesehene Herausforderungen einzuplanen. Ebenso wäre es möglich gewesen, bereits mit den Blueprints anzufangen, bevor die Texturierung der Villa abgeschlossen war. Damit hätte die Zeit effektiver genutzt werden können und am Ende wäre mehr Zeit übrig geblieben für kleine Details und den finalen Feinschliff.
{: style="text-align: justify;"}


<!-- <script type="module" src="https://unpkg.com/@google/model-viewer@4.0.0"></script> -->
<script type="module" src="https://cdn.jsdelivr.net/npm/@google/model-viewer@latest"></script>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />


<style>
    /* Ensure the map and 3D viewer have fixed sizes */
    .content-container {
        max-width: 800px; /* Adjust to your needs */
        margin: 0 auto; /* Centering */
    }

    .map-container {
        width: 100%;
        height: 40vh; /* Responsive height */
        border: 1px solid #ccc; /* Optional border */
    }
</style>

# 7. Literatur
[^1]: Slater, Mel & Sanchez-Vives, Maria (2016). Enhancing Our Lives with Immersive Virtual Reality. Frontiers in Robotics and AI. 3. 10.3389/frobt.2016.00074. 
[^2]: Burdea, Grigore & Coiffet, Philippe (2003). Virtual Reality Technology. Presence. 12. 663-664. 10.1162/105474603322955950. 
[^3]: Wheatstone, Charles (2011). Contributions to the Physiology of Vision.—Part the First. On some remarkable, and hitherto unobserved, Phenomena of Binocular Vision. The Scientific Papers of Sir Charles Wheatstone. Cambridge University Press. 225–283
[^4]: Sutherland, Ivan E. (1998). A head-mounted three dimensional display. Seminal graphics: pioneering efforts that shaped the field. Association for Computing Machinery. 1. 295–302. 10.1145/280811.281016
[^5]: Grasnick, Armin (2020). Grundlagen der virtuellen Realität: Von der Entdeckung der Perspektive bis zur VR-Brille. Springer Verlag. 10.1007/978-3-662-60785-5. 
[^6]: LaValle, Steven. M. (2017). Virtual Reality. Cambridge University Press.
[^7]: Rizzo, Albert & Koenig, Sebastian (2017). Is Clinical Virtual Reality Ready for Primetime?. Neuropsychology. 31. 10.1037/neu0000405. 
[^8]: Freina, Laura & Ott, Michela (2015). A Literature Review on Immersive Virtual Reality in Education: State Of The Art and Perspectives. Conference: eLearning and Software for Education. 10.12753/2066-026X-15-020. 
[^9]: Whyte, Jennifer & Bouchlaghem, Nouran & Thorpe, Antony & Mccaffer, Ronald (2000). From CAD to Virtual reality: Modelling approaches, data exchange and interactive 3d building design tools. Automation in Construction. 10. 43-55. 10.1016/S0926-5805(99)00012-6.
[^10]: Zyda, Michael (2005). From Visual Simulation to Virtual Reality to Games. Computer. 38. 25-32. 10.1109/MC.2005.297. 
[^11]: Gonçalves, Raquel & Pedrozo, Ana & Coutinho, Evandro & Figueira, Ivan & Ventura, Paula (2012). Efficacy of Virtual Reality Exposure Therapy in the Treatment of PTSD: A Systematic Review. PloS one. 7. e48469. 10.1371/journal.pone.0048469. 
[^12]: Knoll, Matthias & Stieglitz, Stefan (2022). Augmented Reality und Virtual Reality – Einsatz im Kontext von Arbeit, Forschung und LehreAugmented Reality and Virtual Reality in the Context of Work, Research and Teaching. HMD Praxis der Wirtschaftsinformatik. 59. 10.1365/s40702-022-00840-5. 
[^13]: *Die Ohlendorff'sche Villa* (o.J.) Zugriff auf: https://ohlendorffsche.de/historie/ (6. März 2025).
[^14]: Hermann, Simeon (2019). Prozedurale Generierung von 3D-Stadtmodellen (Bachelorarbeit). Koblenz. (Zur Erlangung des Grades Bachelor of Science (B.Sc.) im Studiengang Computervisualistik).
[^15]: Dörner, Ralf & Broll, Wolfgang & Grimm, Paul & Jung, Bernhard (2019). Virtual und Augmented Reality (VR/AR) (2. Auflage). Springer Verlag. 10.1007/978-3-662-58861-1
[^16]: Jobst, Markus & Germanchis, Timothy (2007). The Employment of 3D in Cartography — An Overview. Multimedia Cartography. 217-228. 10.1007/978-3-540-36651-5_15. 
[^17]: Kraak, Menno-Jan & Ormeling, Ferjan (2013). Cartography: Visualization of Geospatial Data. Routledge. 10.4324/9781315847184
[^18]: Helmholz, P. & Zlatanova, Sisi & Barton, Jack & Aleksandrov, Mitko (2020). GEOINFORMATION FOR DISASTER MANAGEMENT 2020 (Gi4DM2020): PREFACE. ISPRS - International Archives of the Photogrammetry, Remote Sensing and Spatial Information Sciences. XLIV-3/W1-2020. 1-3. 10.5194/isprs-archives-XLIV-3-W1-2020-1-2020. 
[^19]: Luebke, D. & Reddy, M. & Cohen, Jonathan & Varshney, Amitabh & Watson, Benjamin & Huebner, R. (2002). Level of Detail for 3D Graphics. Morgan Kaufmann Publishers Inc.
[^20]: Epic Games (2023). Virtual Reality Development with Unreal Engine. Zugriff auf: https://www.unrealengine.com (10. März 2025).
[^21]: Kurkjian, Stephen (2015). Master Thieves: The Boston Gangsters Who Pulled Off the World's Greatest Art Heist. PublicAffairs.
