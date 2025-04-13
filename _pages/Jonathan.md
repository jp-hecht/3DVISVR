---
title: "Bericht von Jonathan Hecht"
permalink: /Jonathan/
toc: true
toc_label: "Inhaltsverzeichnis"
author_profile: true
author: 
  name: "Jonathan Hecht"
  avatar: "/assets/images/JPH/jph.png"
  bio: "M.Sc. Geodäsie und Geoinformatik"
  location: "Hamburg, Germany"
  links:
    - label: "Mastodon"
      icon: "fa-brands fa-mastodon"
      url: "https://mastodon.social/@jphecht"
    - label: "GitHub"
      icon: "fab fa-fw fa-github"
      url: "https://github.com/jp-hecht"
excerpt: "Ohlendorff’schen Villa - Die Umgebung einer VR-Anwendung"
header:
  overlay_image: "/assets/images/JPH/villa_sketch.jpg"
  caption: "Bildquelle: [**ohlendorffsche.de**](https://ohlendorffsche.de/historie/)"
  overlay_filter: 0.5
  
---

# 1. Einleitung
Die Ohlendorff'sche Villa übernimmt im Hamburger Stadtteil Volksdorf eine hervorgehobene Stellung im urbanen Gefüge, welche insbesondere durch die Zentralität im Stadtteil, sowie die Betonung des Gebäudes durch den umschließenden Park gegeben ist. Um diesen Besonderheiten auch außerhalb einer vor Ort Begehung erfahrbar zu machen und somit die Villa für diverse Menschen zugänglich zu machen, wurde im Rahmen des Kurses 3D-Visualisierung an der HafenCity Universität von Herrn Prof. Kersten eine Virtual Reality (VR) Anwendung zur Ohlendorff'schen Villa entwickelt. Ziel ist es, ein zur Verfügung gestelltes historisches Gebäude für eine interaktive Begehung und realitätsnahe Visualisierung aufzubereiten.
{: style="text-align: justify;"}
Innerhalb der letzten Jahrzehnte ist die Bedeutung von VR Anwendungen durch die geschaffene multisensorische 3D Umwelt in verschiedenen Feldern gestiegen[^1]. Typische Anwendungsfelder umfassen unter anderem die Psychologie, Simulatoren, Operationen, Lernumgebungen, Sport oder in der Industrie[^4]. Innerhalb der Architektur, Ingenieurwesen und Konstruktion ermöglichen VR Anwendungen die Immersion von Nutzenden in eine virtuelle Welt, welche den hohen Anforderungen der visuellen Kommunikation in Bezug auf Design, Konstruktion und Management der gebauten Umwelt ermöglicht[^1]. Entsprechend wird insbesondere die Simulation der realen Welt angestrebt. Erste Versuche von VR Applikationen für die bebaute Umwelt wurden zwar bereits in den 1990er Jahren getestet, jedoch erfolgte eine größere Verbreitung durch praktische Anwendungen erst in den letzten Jahren durch eine Reduktion von Einstiegshürden mittels leistungsfähigerer Hard- und Software. Beispiele für praktische Anwendungen können Kundenbegehungen oder die schrittweise Überprüfung von Bauabläufen sein[^2].
{: style="text-align: justify;"}
Der enge Zusammenhang zwischen VR und Geoinformatik (auch Geodäsie) kann bereits aus einer einfachen Definitionen abgeleitet werden. So beschäftigt sich die Geoinformatik mit dem Wesen und der Funktion raumbezogener, meist digitaler Informationen, die sich auf die Erde beziehen[^25]. Entsprechend der Dreidimensionalität der Gegebenheiten auf der Erde kann VR als ergänzende Methode angesehen werden. Zwar wurden Karten in der Vergangenheit meist in 2D dargestellt, jedoch gibt es fortgehende Bemühungen einer 3D Darstellung. Als Präsentationsmöglichkeit kann dabei unter anderem VR sein. Den Studierenden ermöglicht die Auseinandersetzung mit dieser Thematik auch andere Techniken als klassische Kartographie zu erlernen.
{: style="text-align: justify;"}
Bevor jedoch tiefer in das Thema, sowie das studentische Projekt eingegangen wird, sollte das Verständnis des Begriffes VR offengelegt werden. Eingeordnet werden kann der Begriff in das übergeordnete Thema des Realitäts-Virtualitäts-Kontinuums[^3]. Dabei wird davon ausgegangen, dass sich Augmented Reality (AR), Augmented Virtuality (AV) und VR zwischen den Endpolen physischen Realität und vollständig virtuellen Umgebung befinden[^5]. AR, AV und VR werden dabei unter dem Begriff *extended reality* (XR) zusammengefasst, welches „[...] alle realen und virtuellen kombinierten Umgebungen und Mensch-Maschine-Interaktionen, die durch Computertechnologie und Wearables erzeugt werden“ umfasst[^6]. Vor diesem Hintergrund wurden verschiedene Definition von VR im wissenschaftlichen Kontext erarbeitet. In unserem Fall wird die nachfolgende Definition als Grundlage gesetzt:
{: style="text-align: justify;"}
> VR leverages immersive technologies to simulate interactive virtual environments or virtual worlds with which users become subjectively involved and in which they feel physically present[^5]
{: #def}
Basierend auf diesem Verständnis wird im folgenden Bericht zunächst das reale Objekt beschrieben, sowie die Entscheidung des Modelles begründet. Im Anschluss folgt die Konzeption unserer VR Anwendung, ergänzende theoretische Überlegungen zur Anwendung und die verwendete Hard- und Software. Nachdem die Voraussetzungen festgelegt wurden, wird die Umsetzung konkretisiert, sowie die Limitierungen samt Fazit aufgezeigt. Innerhalb dieses Berichtes wird insbesondere die Entstehung des Außenbereiches, samt aller dazugehörigen Elemente, aufgegriffen. Andere Bereiche, wie beispielsweise die Texturierung des Gebäudes, werden überblicksartig erläutert, aber detaillierter in den beiden anderen Berichten ([Marlene Arnold](https://jp-hecht.github.io/3DVIS/Marlene), [Madelaine Linek](https://jp-hecht.github.io/3DVIS/Madelaine/)) der Gruppenarbeit aufgegriffen.
{: style="text-align: justify;"}

# 2. Ohlendorff'sche Villa
Wie aus der [Übersichtskarte](#map1) deutlich wird und bereits angedeutet wurde, befindet sich das ehemalige großbürgerliche Wohnhaus im Hamburger Stadtteil Volksdorf. Im Wesentlichen wird das Gebäude vom zugehörigen Park sowie Gebäuden mit primärer Wohnfunktion eingegrenzt. 
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
Die historische Entwicklung wird auf der Website von der heute besitzenden Stiftung Ohlendorff’sche Villa durch Gerhard Hirschfeld beschrieben. Eine kurze Zusammenfassung wird hier aufgegriffen: Die heute denkmalgeschützte Villa wurde 1928/29 von Erich Elingius für Hans v. Ohlendorff errichtet. Dieser ließ das vorherige Gutshaus seines Vaters Heinrich v. Ohlendorff abreißen. Die neue Villa hebt sich durch ihre herrschaftliche Gestaltung hervor. Während der Abriss der eklektizistischen Villa seines Vaters dem Zeitgeist entsprach, wählte Hans v. Ohlendorff mit Elingius einen Architekten, der konservative Bauweisen bevorzugte. Besonders auffällig ist die zentrale Auffahrt mit dem hervorgehobenen Eingangsportal, das den repräsentativen Anspruch der Familie unterstreicht. Die asymmetrisch gestaltete Gartenseite wirkt wohnlicher, doch das hohe Sockelgeschoss verhindert eine direkte Verbindung zum Park. Entsprechenden der repräsentativen Funktion wurden die Zimmer im Untergeschoss als Empfangszimmer, Bibliothek, Musikzimmer und Speisezimmer gestaltet. Die obere private Etage umfasste ein großes Schlafzimmer mit Ankleidezimmer und eigenem Bad sowie einen achteckigen Frühstücksraum. Ein separater Flur für das Dienstpersonal führte zur Anrichte und zum Speisenaufzug. Der Gästebereich bestand aus zwei Fremdenzimmern mit einem gemeinsamen Bad. Die Villa zeigt sparsam eingesetzte Schmuckelemente. Werkstein-Umrahmungen betonen die Rundbogenfenster und Rechtecköffnungen, während Balkone und französische Fenster mit gusseisernen Ziergittern versehen sind.[^8]. Hans v. Ohlendorff verkaufte das Anwesen an die Stadt Hamburg im Jahr 1953, welche das Gebäude bis 2006 als Ortsamt nutzte. Im Anschluss wurde das Gebäude bis 2014 saniert und in eine Kultur- und Begegnungsstätte des Stadtteils umgestaltet[^10].
{: style="text-align: justify;"}
Die Entscheidung für die Villa basiert auf unterschiedlichen Kriterien. Als pragmatische Überlegung liegt die Villa im Vergleich zu den anderen beiden Projekten (Schloss Agathenburg und Horneburg) in erreichbarer Nähe vom Hamburg Stadtzentrum, sodass eine vor Ort Begehung möglich ist. Des Weiteren sorgte die spannende Geschichte für Inspirationen, was die Ausgestaltung angeht und ermöglichte gleichzeitig eine flexiblere Gestaltung und Stilisierung.
{: style="text-align: justify;"}

## Daten
Innerhalb unterschiedlicher Kurse an der HafenCity Universität wurden diverse Daten, wie beispielsweise die Aufmaße der Räume, 360 Bilder der Innenräume oder Punktwolken, über das Gebäude aufgenommen. Aus den vorhandenen Daten wurde die Außenhülle des Modelles bereits manuell modelliert und den Gruppen als FBX-Datei zur Verfügung gestellt. Diese Datei ist Grundlage für alle weiteren Arbeitsschritte. Das zur Verfügung gestellte Gebäude wurde im Anschluss durch ein Gruppenmitglied aufbereitet und Mängel entfernt. Details zu den notwendigen Veränderungen können in den Sektionen [ Daten](https://jp-hecht.github.io/3DVIS/Marlene/#daten) und  [Modellierung](https://jp-hecht.github.io/3DVIS/Marlene/#modellierung) nachvollzogen werden. Für den nachfolgenden Bericht wird entsprechend ein vollständiges Modell angenommen.
{: style="text-align: justify;"}

# 3. Entwicklung einer VR Anwendung für die Ohlendorff'sche Villa
Nachdem durch eine Definition von VR, der Historie des Gebäudes und die verfügbaren Daten bereits erste Hintergründe erläutert wurden, wird im folgenden die Konzeption der VR Anwendung aufgegriffen und im Anschluss die konkrete Implementierung samt theoretischer Überlegungen und deren konkreter Umsetzung beschrieben.
{: style="text-align: justify;"}
## Konzeption
Vorgegebenes Ziel des Projektes ist die interaktive Begehung und Visuallisierung der Ohlendorff'schen Villa. Entsprechend dieser Anforderung wurde das Gebäude als zentralstes Element in den Mittelpunkt der virtuellen Szene gestellt. Da jedoch die Villa insbesondere im Zusammenhang und Wirkungsgefüge mit der Umgebung steht, sollte diese auch eingebunden werden, wobei die Fokussierung auf die Villa nicht verloren gehen darf. Dieses kann den Nutzenden gleichzeitig ermöglichen ein besseres Verständnis für die Größenrelationen zu erlangen. Da eine großräumige Darstellung beispielsweise von gesamt Volksdorf keinen Mehrwert brächte und ein gesamter Stadtteil vom Umfang nicht gestaltet werden könnte, wurde sich entschiedenen die Villa auf eine Scheibe darzustellen. Die Idee markante Elemente im Raum in Blockform bzw. Scheibenform darzustellen, wurde inspiriert von Darstellung digitaler Geländemodelle als Block ( [Beispiel 1](https://medium.com/@benoit.pimpaud/rayshader-experiment-e58f09eb91d), [Beispiel 2](https://www.researchgate.net/figure/Digital-Elevation-Model-DEM-3D-Elevation-Model-and-3D-Realistic-Model-of-the-combined_fig1_268074280)). Bei der Wahl der Blockform wurde sich an den natürlichen Gegebenheiten vor Ort orientiert. Ziel war es die Umgebung abzubilden, ohne jedoch die Hauptsichtachsen auf die Front und Rückseite der Villa zu beschränken. In der praktischen Umsetzung erwies sich eine Kreisform als geeignet. 
{: style="text-align: justify;"}
Die Gestaltung des Außenbereiches orientiert sich an einer stilisierten kartographischen Darstellungen, welche eher den Sehgewohnheiten der Nutzenden entsprechen, als der Versuch, eine realitätsgetreue Umgebung zu schaffen. Angelehnt an die kartographischen Generalisierung sollten Objekte in einem *Low Poly Stil*, also der Modellierung von Objekten durch ein Netz von wenigen verbundenen Punkten, abgebildet werden[^11]. Als Beispiel kann hier bereits auf die Verwendung von einfachen Blöcken (LoD 1) mit nur zwei Farben der umgebenden Gebäude erwähnt werden. Diese einfache Geometrie steht damit im deutlichen Kontrast zur Villa, welche in Bezug auf Gebäudeform und Texturierung im Detail ausgestaltet wurde. 
{: style="text-align: justify;"}
Die stilisierte 3D-Karte verbindet somit klassische Kartografie mit modernen Visualisierungstechniken. Im Gegensatz zu zweidimensionalen Karten fügt sie eine zusätzliche Informationsebene hinzu, die gezielte Hervorhebungen, Maßstabsverzerrungen oder Detailreduktionen ermöglicht, um die Wahrnehmung zu steuern[^23]. In diesem Projekt wird eine schematische Umgebung mit einem realistisch modellierten zentralen Objekt kombiniert – ein Ansatz, der auch in Stadtplanung, Architekturvisualisierung und digitalen Museumslandschaften Anwendung findet[^22].
{: style="text-align: justify;"}
Die Gestaltung der Villa selbst verfolgt die Idee, dass diese als Versteck für wertvolle Kunstgegenstände dient. So wurde zwar die äußere Architektur dem realen Objekt nachempfunden, jedoch die Texturierung an die Idee angepasst. Entsprechend spiegelt auch der Innenbereich nicht die realen Gegebenheiten wider, sondern spielt mit einer Präsentationsfläche für Kunstobjekte. Folglich wurden besondere Materialien für die Texturierung der Innenbereiche gewählt. Im Innenbereich wurden 2.5 Räume geschaffen. Neben dem Eingangsbereich existieren ein Musikzimmer und ein Kunstraum. Im Musikzimmer werden Instrumente verschiedener Kulturen bzw. Zeitepochen ausgestellt. Das Kunstzimmer behandelt berühmte, in der Realität verschollene Malereien und deren Geschichte.
{: style="text-align: justify;"}

## Möglichkeiten zur VR-Umsetzung
Bevor konkrete umgesetzte Elemente beschrieben und Funktionsweisen erläutert werden können, werden sowohl die Arbeitsschritte zur Entwicklung einer VR Anwendung als auch Entscheidungen für konkrete Hard- und Software aufgegriffen.
{: style="text-align: justify;"}
### Theorie
Wie bereits aus der [Definition](#def) hervorgeht, zielt eine VR Anwendung auf die Immersion der Nutzenden in eine virtuelle Welt ab, welche gleichzeitig die Außenwelt versucht auszuschließen[^16]. Um einen hohen Immersionsgrad zu erzeugen, sollte die geschaffene Umgebung im Zusammenspiel aus realer Umgebung, Hardwarekomponenten und Software ähnlich zur Realität reagieren[^18]. Einfache Beispiele hierfür können hochauflösende Displays oder räumliche Geräuschkulissen sein.
{: style="text-align: justify;"}
Wenn ein VR-System von großen Komponenten bis zu kleineren Bestandteilen betrachtet wird, kann zunächst die reale Umgebung der VR-Anwendung betrachtet werden. Diese reichen von einfachen stationären Umgebungen, wo die Nutzenden einzeln sitzen oder stehen, bis zu realen Umgebungen, wo ein gesamter Raum ggfs. mit verschiedenen Nutzenden verwendbar für die VR Applikation ist[^19]. Die nächste größere Komponente ist die Art und Weise, wie den Nutzenden die virtuelle Realität gezeigt wird. Eine Differenzierung in fünf Kategorien kann der nachfolgenden Abbildung entnommen werden:
{: style="text-align: justify;"}

![Mögliche Displayarten einer VR Anwendung]({{ site.url }}{{ site.baseurl }}/assets/images/JPH/vr_devices.svg)
*Abbildung 1: Differenzierung von Displayarten zur Visualisierung einer VR-Anwendung[^2].*

Als Hauptdifferenzierung kann die Position des Displays genannt werden. Die Bandbreite reicht von verschiedenen Kombinationen an fest montierten Displays, über Displays, die über den Kopf gehalten werden und zuletzt Displays, die in der Hand gehalten werden. Dabei ist das gängige Verständnis, dass VR mit abschließenden Head-based Displays (HBD) verbunden ist. Neben dem Begriff HBD findet sich in der Literatur häufiger der Begriff Head-mounted Display (HMD).
Je nach System kommen diverse integrierte oder externe Sensoren sowie Aktoren zum Display hinzu, um den Grad der Immersion zu erhöhen. Beispiele für Sensoren umfassen Kameras, Bewegungstracker oder Eingabegeräte (Joysticks, Trackpads, Laufbänder, ...). Als Aktoren können neben dem Display beispielsweise Audiowiedergabegeräte oder Vibrationsmotoren sein[^18]. Als wichtigste Eigenschaft können geringe Latenz und Genauigkeit genannt werden[^19].
{: style="text-align: justify;"}
Im Zusammenspiel zwischen Hard- und Software können bei einer schlecht eingestellten und gestalteten VR Anwendung auch potenzielle physische, psychische Schäden für die Nutzenden auftreten. Bevor auf typische Gefährdungen eingegangen werden kann, sollte darauf hingewiesen werden, dass ebenfalls Cyberbedrohung mit höchst sensitiven Daten möglich sind und hier nicht gesondert auf VR, sondern auf gesundheitsrelevante Aspekte in XR Anwendungen bezogen wird. Die Bandbreite an potenziellen Gefährdungen kann Abb. 2 entnommen werden: 
{: style="text-align: justify;"}

![Gefährdungen XR]({{ site.url }}{{ site.baseurl }}/assets/images/JPH/xr_threat.drawio.svg)
*Abbildung 2: Überblick über potentielle Gefährdungen für die menschliche Gesunheit[^19].*

Innerhalb des projektrelevanten praktischen Überlegungen sind in unserem Fall die Verhinderung von Motion Sickness und physische Verletzungen durch Kollisionen von Relevanz, da die Anwendung weder auf die extensive Nutzung durch Kinder abzielt oder bewusst die Nutzenden negativ manipuliert. 
{: style="text-align: justify;"}
Durch die Breite der Hardwarelösungen, sowie Gefährdungen wurden die Möglichkeiten Präsentation der VR-Welt aufgezeigt, jedoch wurde noch nicht auf die je nach Anwendungsfall und Umfang breiten Möglichkeiten zum Bau der Anwendung eingegangen. Von einfacheren JavaScript-Bibliotheken wie WebGL bis zu dedizierten Game Engine kann eine VR Anwendung entwickelt werden. Die Arbeitsschritte bis zur fertigen Anwendung bleiben jedoch vergleichbar: 
{: style="text-align: justify;"}

![Theoretischer Workflow einer VR Anwendung]({{ site.url }}{{ site.baseurl }}/assets/images/JPH/workflow_3d.drawio.svg)
*Abbildung 3: Die Abbidlung zeigt den schematischen Workflow für eine VR Anwendung. Zunächst werden Eingabedaten in verschiedenen Formaten in eine 3D-Modellierungssoftware oder Game-Engines importiert. Modelle können manuell oder rechnergestützt generiert und für Visualisierungen genutzt oder in Game-Engines weiterverarbeitet werden. Anwendungen aus Game-Engines können anschließend auf Webplattformen und VR-Headsets bereitgestellt werden[^12]. Die Softwarepakete sind nicht umfassend und stellen einzig bekannte Beispiele dar.*

Zunächst müssen als Eingabedaten Modelle von realen Objekten erstellt oder bezogen werden. Beispiele für die Erstellung beinhalten die selbstständige Modellierung, der Bezug von existierenden Modellen oder prozedurale Erzeugung. Im Anschluss werden das bzw. die Modelle in eine 3D Modellierungssoftware oder 3D Game Engine übertragen, um aus den einzelnen Modellen eine 3D Anwendung zu erzeugen. Die Grenzen zwischen Modellierungssoftware und 3D Game Engine sind dabei nicht trennscharf. Zum Beispiel ermöglicht Blender neben der Modellierung auch direkte Animation. Die fertige Applikation wird anschließend auf dem Zielgerät oder der Präsentationssoftware aufbereitet. 
{: style="text-align: justify;"}

### Entwicklungsumgebung
Dieser theoretische Workflow kann in Bezug auf unsere Vorgaben und Konzeption, wie folgt konkretisiert werden

![Konkreter Workflow]({{ site.url }}{{ site.baseurl }}/assets/images/JPH/workflow_3d_con.drawio.svg)
*Abbildung 4: Konkretisierung des theoretischen Workflows für die Entwicklung einer VR Anwendung über die Ohlendorff'sche Villa*

Für unsere Anwendung wurden primär existierende 3D Modelle im Vektorformat verwendet. Der Begriff der Vektordaten ist hier nicht beschränkt auf Vektordaten, wie sie typischerweise in geographischen Informationssystemen vorkommen. Die Daten wurden entweder von der Kursleitung zur Verfügung gestellt, selbstständig modelliert oder vorhandene kostenfreie Modelle aus dem Internet verwendet. Im Anschluss wurden die Daten in [Blender](https://www.Blender.org/) aufbereitet. Dies umfasste alle Schritte, welche notwendig sind, um keine weiteren Veränderungen in einer Game Engine vorzunehmen. Hierzu zählen insbesondere die Positionierung, Modellierung und Texturierung. Zusätzlich zu Blender wurden [BlenderGIS](https://Blender-addons.org/Blendergis-addon/) und [Rigacar](https://Blender-addons.org/rigacar/) als Erweiterungen verwendet. Die speziellen Nutzungen werden in der Implementierung konkretisiert. Die Entscheidung Blender zu verwenden liegt hauptsächlich in der hohen Flexibilität inklusive der einfacheren Programmierung, sowie dem Vorteil, dass das Open-Source Projekt den Studierenden dauerhaft zur Verfügung steht und alle gängigen Betriebssysteme unterstützt werden. Hierdurch ist der Lerneffekt auch auf andere Projekte übertragbar.
{: style="text-align: justify;"}
Die aufbereiteten Modelle wurden im Anschluss in [Unreal Engine 5.X](https://www.unrealengine.com/en-US) (UE) importiert. UE wurde verwendet, um jegliche Form der Interaktion von der Bewegung in der VR Umgebung bis zum Licht zu erstellen. Über [SteamVR](https://store.steampowered.com/app/250820/SteamVR/?l=german) wurden die Anwendung im Anschluss auf eine HTC Vive Pro transferiert und getestet. Dieses Setup war im Wesentlichen durch die Aufgabenstellung vorgegeben, sodass die Verwendung einer alternativen Game Engine oder HMD nicht diskutiert wurde.
{: style="text-align: justify;"}
Das System der HTC Vive Pro setzt sich neben dem HMD aus zwei Motion-Controllern und zwei Tracking Sensoren zusammen. Mittels des Trackings kann das HMD, sowie die Motion-Controller im Raum verortet werden und ermöglichen die freie Bewegung einem Raum von ungefähr  4.5m × 4.5m. Mittels der Controller kann mit der VR Welt in Interaktion getreten werden. Ergänzend dazu sind im HMD ein Näherungssensor, ein Beschleunigungssensor und ein Gyroskop verbaut. Neben dem Display existieren Lautsprecher sowie haptische Rückmeldungen durch die Controller[^17].
{: style="text-align: justify;"}

# 4. Implementierung
In den folgenden Abschnitten werden die unterschiedlichen Schritte und Details zur Implementierung der Konzeption genauer erläutert. Dabei wird von der Interaktion mit der Welt über die Objekten im Außenbereich in den Innenbereich gearbeitet.
{: style="text-align: justify;"}

## Bewegung
Um in Interaktion mit der VR Welt zu treten, wurden die Tasten des Controllers mit unterschiedlichen Funktionalitäten belegt. Neben der intuitiven freien Bewegung im 4.5m × 4.5m Raum des Trackingraums wurde das Trackpad des rechten Controllers mit einer Vorwärtsbewegung in zwei Geschwindigkeitsstufen belegt. Die Bewegungsrichtung wird, wie in der Realität, mittels der Blickrichtung bestimmt. Um kleinere Hindernisse zu überwinden, ist die Triggertaste des rechten Controllers mit dem Sprung des Nutzenden belegt. Neben der klassischen selbständigen Bewegung gibt es in der VR-Szene zwei Trigger, welche die Position der Spieler:in verändern. Hierdurch wird der Spielende von der Scheibe auf Höhe eines Heißluftballons teleportiert, um die vollständige Szene in unterschiedlichen Lichtstimmungen beobachten zu können.
{: style="text-align: justify;"}
Wenn der rechte Controller mit der Bewegungssteuerung des VR Pawns belegt ist, wird der linke Controller verwendet, um in Interaktion mit der Welt zu treten. So kann die Lupe über die Griffe aufgehoben werden, die Eingabe im Widget mittels des Triggers getätigt werden oder die Tür durchs Trackpad geöffnet werden.
{: style="text-align: justify;"}
Zusammenfassend ist die Tastenbelegung, wie folgt festgelegt wurden:
{: style="text-align: justify;"}

![Bedienungsanleitung]({{ site.baseurl }}/assets/images/MWA/Kurzanleitung.png)
*Abbildung 5: Belegung der Controller-Tasten für Interaktionen in der VR-Anwendung*

## Außenbereich
Das relevant Gebiet wurde in QGIS eingezeichnet und in Blender importiert. Das einfache aber durch BlenderGIS richtig positionierte Polygon wurde daraufhin extrudiert. Damit die Nutzenden nicht aus der Welt fallen können, wurde eine Kollisionsbox um die Scheibe erzeugt. Auf dieser Scheibe wurden drei unterschiedliche amtliche Geodatensätze platziert. Als Hintergrund, der das Gebiet vollständig bedeckt, wurden Daten über den Arten- und Biotopschutz gewählt[^13]. Aufbauend darauf wurden die Feinkartierung der Straßen mit deren expliziter Nutzung hinzugefügt[^14]. Der Datensatz wurde im Vorfeld leicht modifiziert um auch die Wege innerhalb des Ohlendorff'schen Park darzustellen. Zuletzt wurden die Level of Detail I Daten von Hamburg verarbeitet, wobei die Daten zunächst in CityJSON konvertiert wurden und im Anschluss zugeschnitten wurden[^15]. Die Gebäude wurden ebenfalls entsprechend der attributierten Höhe extrudiert. Anschließend wurde die jeweiligen Modellen orientiert am angestrebten Kartenstil mit neutralen Farben eingefärbt. Die Wirkung des resultierenden Modelles stellt sich wie folgt dar:
{: style="text-align: justify;"}

<model-viewer 
    src="{{ site.url }}{{ site.baseurl }}/assets/model/Base.glb"
    alt="3D model"
    camera-controls 
    auto-rotate
    exposure="1"
    shadow-intensity="1"
    ar
    style="width: 100%; height: 40vh;">
</model-viewer>
*Modell 1:  Der Außenbereich der Ohlendorff'schen Villa nach der Integration von amtlichen Geodaten. Die Villa selbst wird nicht gezeigt. Die Basis Scheibe wurde nicht dargestellt, da diese zu Artefakten geführt hat. Bei der Gesamtansicht des Modells sind in Teilen noch weitere Artefakte zu beobachten. Die Artefakte konnten in der finalen VR Applikation nicht beobachtet werden.*

Ebenfalls wurden Versuche unternommen, ein digitales Höhenmodell zu integrieren, da die Villa in den Hang hinein gebaut wurde. Jedoch ist die Auflösung der amtlichen Daten für eine VR Anwendung zu gering und die eher geringen Höhenunterschiede sind ohne Überhöhung nicht erkennbar. Gleichzeitig führte eine Integration zu massiven Performanceverlusten. Als Folge wurde die Idee verworfen.
{: style="text-align: justify;"}
Um die Immersion der Nutzenden zu erhöhen, wurden weitere Elemente der realen Umwelt der Applikation hinzugefügt. Als dominante Elemente wurden Modelle von Bäumen, Gebüschen, Steinen, Autos und Laternen der Szene hinzugefügt. Die Modelle konnten alle frei verfügbar im Internet gefunden werden und wurden in Blender einzig eingefärbt und/oder durch Streckung, Drehungen oder Expansion leicht modifiziert, um visuelle Variation zwischen bspw. Baumtypen herzustellen. Alle zusätzlichen Elemente wurden nicht in einer realistischen Anzahl dargestellt. Diese Entscheidung resultiert aus Experimenten, die zeigen, dass zu viele Elemente die Nutzenden visuell überfordern und somit keinen Mehrwert bringen. Das resultierende Modell sieht, wie folgt aus: 
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
*Modell 2: Vollständiger Außenbereich der VR Applikation zur Ohlendorff'schen Villa in Hamburg Volksdorf. Erneut wurde die Villa ausgelassen.*

Abseits der unterschiedlichen Modelle sorgen eine Geräuschkulisse, die Bewegung der Autos und ein Tag-Nacht Rhythmus samt verbundener Lichter für eine höhere Immersion und spielen gleichzeitig mit den Nutzenden beim Betreten der Villa mit gestohlenen Kunstgegenständen. Visuell am auffälligsten ist der Tag-Nacht-Rhythmus. Hierzu wurde der Blueprint des Sun Position Calculators so verändert, dass ein realitätsnaher Sonnen-und Mondverlauf je nach Position auf der Erde ermöglicht wird. Neben der Definition einer Position auf der Erde lassen sich auch Parameter über die Intensität und Größe sowie Material der Sterne kontrollieren. Die Hauptbestandteile des Blueprints sind zwei direktionale Lichter, die als Sonne und Mond dienen und durch eine Wolkenatmosphäre ergänzt werden. Die Lichter sorgen für die Beleuchtung der Szene zu beiden Tageszeiten und können unter anderem in ihrer Intensität angepasst werden. Die umgebende Atmosphäre sorgt für die Brechung des Lichtes und erzeugt damit eine blaue Himmelsfarbe. Die weiteren Elemente sind primär als Ergänzung und Vervollständigung der Szene zu sehen. Hierzu zählen die sichtbaren Wolken, die Emission von Licht durch den Himmel und der Nebel, welcher dafür sorgt, dass die Drehung außerhalb des Scheibe unsichtbar wird. Die Vielzahl an möglichen Parametern wurde iterativ ausgetestet, wobei auf Basis dieses Blueprints eine vollständig andere Stimmung möglich ist. Als ergänzende Interaktion und als Aussichtsplattform kann ein Heißluftballon über einen kleineren Ballon im Außenbereich *besucht* werden.
{: style="text-align: justify;"}
Im Kontext dieser Implementierung wird auch ermöglicht, unterschiedliche Lichter je nach Tageszeit an und auszuschalten. Diese Funktionalität benötigt durch die Berechnung der Schatten viele Ressourcen und wurde einzig in einem Innenraum, sowie der Straßenbeleuchtung verwendet. Ähnlich dazu wurde ein Material erzeugt, welches auch auf die Tageszeit reagiert und bei den Fahrzeugen dazu führt, dass die Leuchter die Farbe in der Tag und Nacht wechseln. Zwei resultierende Beispiele können hier gezeigt werden:
{: style="text-align: justify;"}

![Beispiel Tag-Nacht]({{ site.url }}{{ site.baseurl }}/assets/images/JPH/Island_Day_Night_Opt.gif)
*Abbildung 6: Überblick eines Tag-Nacht-Rhythmuses über die ganze Insel. Neben der Veränderung des Lichtes lässt sich bereits die Bewegung der Fahrzeuge erkennen.*
{: #haus}

![Beispiel Tag-Nacht]({{ site.url }}{{ site.baseurl }}/assets/images/JPH/Haus_Day_Night_Opt.gif)
*Abbildung 7: Detailaufnahme des Tag-Nacht Rhythmuses inklusive der sichtbaren Veränderung der Innenbeleuchtung*

Um die hier sichtbaren Fahrzeuge zu bewegen, wurden diese in Blender mittels Rigacar vorbereitet, sodass aus einem statischen Netz ein Skelettnetz erzeugt wurde. Hierdurch wurden die Größe vereinheitlicht, die einzelnen Räder bewegbar gemacht und der Drehpunkt für den späteren Blueprint aufbereitet. In der Theorie ist es mit einem solchen Fahrzeug möglich, dass ein Actor einsteigen und fahren kann. Dem jeweiligen Fahrzeug wurde ein Blueprint hinzugefügt, der die Fahrzeuge auf einem Spline bewegen lässt und diesen vorher selbständig auffindet. Insgesamt wurde je ein Spline für jede Fahrtrichtung implementiert. Außerhalb der Scheibe sind Markierungen gesetzt, welche die jeweiligen Fahrzeuge erkennen, auf eine Liste schreiben und sichtbar oder unsichtbar machen, je nachdem ob diese bereits auf der Liste existieren. Grundlegend versucht die Komponente, sobald der Spline gefunden wurde, zunächst die Position auf dem Spline zu bestimmen. Daraufhin sucht die Komponent ausgehend von der Front des Akteurs die nächste Zielposition und bewegt anschließend das Fahrzeug Richtung des Zieles. Dieser Prozess wiederholt sich, bis der Prozess gestoppt würde. Das Ergebnis stellt sich, wie folgt dar: 
{: style="text-align: justify;"}

![Beispiel Bewegung des Fahrzeugs]({{ site.url }}{{ site.baseurl }}/assets/images/JPH/Car_Move_Opt.gif)
*Abbildung 8: In der Animation sind drei fahrende Fahrzeuge sichtbar. Der Sportwagen wurde für die Animation an einer ungewöhnlichen Stelle positioniert und fand den Spline automatisiert.*

Zuletzt wurden unterschiedliche Sounds der Umgebung hinzugefügt. Dabei unterscheidet sich die Komplexität der Sounderstellung. Für die sich bewegenden Fahrzeuge wurde relativ einfach ein Motorensound hinzugefügt und überall in der Welt wurden Vogelgeräusche hinterlegt. Die Vogelgeräusche wurden so implementiert, dass jeweils zufällig zwei von acht möglich Sounds kombiniert in Wiederholung gespielt werden. Deutlich komplexer sind die adaptiven Windgeräusche. Das Grundkonzept ist, dass sich Windgeräusche je nach Umgebung der VR-Spieler:in in der Lautstärke verändern, sodass auf einer freien Fläche der volle Sound erklingt und in engen Umgebungen deutlich weniger Windgeräusche. Um diesen Effekt zu ermöglichen, wurde eine Actor Component dem VR Pawn hinzugefügt. Innerhalb dieser Komponente wird zunächst ein aus zwei verschiedenen starken Windgeräuschen zusammengesetzter Sound erzeugt. Ausgehend davon wird ein Timer gestartet, der je nach Zeiteinheit eine Anpassung der Windlautstärke vornimmt. Die Anpassungstärke wird dabei durch die Veränderung von emittierten Linien der Komponent ermittelt. Hierzu werden bspw. sechs Linien vom Pawn ausgestrahlt, sobald diese Linie ein Objekt trifft, verändert sich der Wert der Linie. Entsprechend muss die Intensität der Windgeräusche verringert werden, sobald mehrere Linien geringere Werte anzeigen. Nach Ermittlung dieses Wertes findet zunächst eine Interpolation statt, um abrupte Veränderungen zu vermeiden. Dieser interpolierte Wert wird im Anschluss verwendet, um die Lautstärke zu verändern.
{: style="text-align: justify;"}

![Beispiel Generierung Wind]({{ site.url }}{{ site.baseurl }}/assets/images/JPH/wind_no_Opt.gif)
*Abbildung 9: Die Animation zeigt die Bewegung des VR-Spielers, welcher sich einer engeren Umgebung nähert. Sichtbar sind ebenfalls die Linien vor der Spieler:in, welche sich bei Annäherung an ein Objekt grün färben. Die aufgezeichneten blauen Werte zeigen eine Verringerung der Werte und dadurch auch eine Reduktion der Windgeräusche.*

## Ohlendorff'sche Villa und Innenbereich

Das vollständig modellierte Modell der Ohlendorff'schen Villa wurde im Anschluss texturiert. Die Textur ist wesentlich für die Immersion, da durch diese eine Simulation der Oberflächenmerkmale, wie Farbe, Muster oder Materialeigenschaften, von Objekt erreicht wird. Um eine ausreichend hohe Performance zu erreichen, ist es im Normalfall nicht möglich, bspw. einzelne Mauersteine samt Furchen zu modellieren.
{: style="text-align: justify;"}
Die praktische Realisierung erfolgte ebenfalls in Blender. Frei verfügbare Texturen, die vielfältige Material- und Oberflächendaten bieten, wurden importiert und in Blenders Shader Editor mithilfe des Principled BSDF Shaders zu einem realistischen Materialsystem kombiniert. Da die importierten Texturen nicht automatisch optimal auf die 3D-Modelle passen, war ein manuelles UV-Mapping notwendig. Dieser Prozess umfasst das UV Unwrapping zur Entfaltung der Oberflächen auf eine zweidimensionale Ebene sowie eine anschließende UV-Optimierung, um Verzerrungen zu vermeiden. Ergänzend wurden verschiedene Mapping-Techniken wie Box Projection Mapping und Manual Projection Painting eingesetzt, um die Texturen präzise auszurichten.
{: style="text-align: justify;"}
Der Innenbereich unserer VR-Anwendung wird durch eine bewegliche interaktive Tür betreten, worauf der Nutzende im Empfangsraum landet. Der Empfangsraum beinhaltet keine weitere Interaktion oder Animation. Im vom Nutzenden rechten Raum wurde ein Kunstraum inklusive Interaktion implementiert. Gezeigt werden insgesamt fünf bedeutende gestohlene Gemälde samt Informationstafeln. Das wertvollste gestohlene Gemälde ist jedoch nicht direkt ausgestellt und muss über eine Zahlenkombination aus einer Truhe *geholt* werden. Um die Zahlenkombination ausfindig zu machen, können die Nutzenden eine Lupe aufnehmen und mittels der Lupe in drei der fünf Bilder eine Zahl finden. Nachdem der Zahlencode in ein Widget eingegeben wurde, öffnet sich die Truhe mit dem sechsten wertvollsten Gemälde. Details zur Implementierung können im Bericht von [Madelaine Linek](https://jp-hecht.github.io/3DVIS/Madelaine/) nachvollzogen werden. Das Ergebnis gestaltet sich, wie folgt:
![Bilck ins Kunstzimmer]({{ site.url }}{{ site.baseurl }}/assets/images/MWA/kunst_opt.gif)
*Abbildung 10: VR Aufnahme des Kunstzimmers.*
{: style="text-align: justify;"}
Im Musikzimmer wurden sieben Instrumente aus unterschiedlichen Regionen der Welt ausgestellt. Die Auswahl der Instrumente reicht von einem Klavier bis zu in Europa unbekannten Instrumenten, wie der Djembe einer westafrikanischen Trommel. Als Interaktion in diesem Raum werden Beispielssoundsequenzen des Instrumentes auf Annäherung gespielt. Durch die Kombination aus visueller Betrachtung als auch prägnanten Musikbeispiel kann eine Verbindung zu virtuellen Welt hergestellt werden.
{: style="text-align: justify;"}

# 5. Fazit  
Insgesamt konnte die in der Konzeption geplante VR-Anwendung in weiten Teilen erfolgreich umgesetzt werden. Besonders der detailreiche Innenbereich des Hauses sowie der stilisierte Außenbereich tragen zu einem stimmigen Gesamteindruck bei. Neben dem Gesamteindruck konnten erfolgreich und zielführend Geodaten verwendet werden. Ebenfalls konnte mit der verwendeten Hardware eine Framerate und folglich die Reduktion der Wahrscheinlichkeit von Motion Sickness erreicht werden, was auf bewusste Entscheidungen in der Konzeption zurückzuführen ist. In Bezug auf die Performance kann auch angemerkt werden, dass es mit einer Ausnahme nur Warn- und Fehlermeldungen gibt, die erwartbar sind und nicht ohen größeren Aufwand gelöst werden können. Zu den positiven Aspekten können. Dies kann innerhalb der Rahmenbedingungen, wie die fehlenden Erfahrungen der Gruppenmitgliedern in 3D Game Engines oder der Modellierung, sowie die erhöhte Komplexität einer Gruppenarbeit eingeordnet werden.
{: style="text-align: justify;"}
Bei  detaillierter Betrachtung können jedoch einige Herausforderungen vorgefunden werden. Zu den Aspekten zählen:
{: style="text-align: justify;"}
- **Versionskontrolle:** Die Zusammenarbeit mit mehreren Entwickler:innen erfordert eine strukturierte Versionierung. Hier wäre es sinnvoll, in zukünftigen Projekten mehr Zeit in ein konsistentes Versionsmanagement zu investieren, um Fehler, die auftauchen werden, leichter beheben zu können. 
- **Praktische VR-Tests:** Zwar wurden während der Entwicklung durchgehend Tests der Anwendung mittels der VR Brillen unternommen. Trotz dessen verhielten sich verschiedene Interaktionen und Animationen in Simulation und Spiel unterschiedlich. In weiteren Projekten sollte der Fokus in der Entwicklungsumgebung verbessert werden.  
- **Außenbereich:** Der Außenbereich entspricht der Konzeptionen und den Vorstellungen der Gruppe. Jedoch wurden keine Experimente mit einer leicht stärker ausgestalteten Welt durchgeführt, um einen Vergleich zu haben und somit eine bewusstere Entscheidung treffen zu können. 
- **Funktionale Einschränkungen:**  
  - Tag-Nacht-Rhythmus: Die Entscheidung, zwei direktionale Lichter (Mond und Sonne) zu verwenden, erzeugt Einschränkungen in Bezug auf die Intensität bzw. die Berechnung des Höhennebels und stellt folglich einen Kompromiss dar. Die Problematik liegt im Fakt, dass beide Lichter versuchen, einen Schatten zu berechnen und sich de facto zu blockieren. Die Ursache – ein Implementierungsfehler oder falsche Einstellungen – konnte bis Projektabgabe nicht aufgefunden werden.  
  - Windgeräusche: Der Wind wird beim Laden der Szene automatisch aktiviert und kann nur über Parameter abgeschwächt, aber nicht vollständig deaktiviert werden. Diese Tatsache ist der Implementierung über einen eigenen Timer geschuldet, welcher nicht einfach deaktiviert und erneut aktiviert werden kann.   
  - Interaktions- und Animationsqualität: Einige Interaktionen wirken noch simpel und wenig realitätsnah. Ein Beispiel ist das Musikzimmer, das lediglich Musik abspielt, ohne spürbar auf die Nutzenden zu reagieren.  

Zusammenfassend wurde mittels des Projektes eine gute Grundlage geschaffen, um in Zukunft und in Verbindung mit den gewonnen Erkenntnissen ausgebaut werden kann. Dabei sind die grundlegenden Elemente vorhanden und die weiteren möglichen Schritte können den Immersionsgrad weiter erhöhen und intensiveren.
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

# Literatur
[^1]: Jeong Kim, Xiangyu Wang, Peter Love, Heng Li & Shih-Chung Kang (2013). Virtual reality for the built environment: a critical review of recent advances, ITcon Vol. 18, pg. 279-305, https://www.itcon.org/2013/14
[^2]: Yuxuan Zhang, Hexu Liu, Shih-Chung Kang & Mohamed Al-Hussein (2020). Virtual reality applications for the built environment: Research trends and opportunities. Automation in Construction. 118. 10.1016/j.autcon.2020.103311
[^3]: Paul Milgram, Haruo Takemura, Akira Utsumi & Fumio Kishino (1994). Augmented Reality: A class of displays on the reality-virtuality continuum. Proceedings of SPIE - The International Society for Optical Engineering Vol. 2351
[^4]: Artur Becker & Carla M. Dal Sasso Freitas (2023). Evaluation of XR Applications: A Tertiary Review. ACM Comput. Surv. Vol. 56, 5, 110 pg.1-35  https://doi.org/10.1145/3626517
[^5]: Isabell Wohlgenannt, Alexander Simons & Stefan Stieglitz (2020). Virtual Reality. Bus Inf Syst Eng. Vol. 62, pg. 455–461. https://doi.org/10.1007/s12599-020-00658-9
[^6]: Übersetzt aus: Åsa Fast-Berglund, Liang Gong & Dan Li (2018): Testing and validating extended reality (xR) technologies in manufacturing. Procedia Manuf. Vol. 25, pg. 31-38. https://doi.org/10.1016/j.promfg.2018.06.054
[^7]: Filip Biljecki, Jantien Stoter, Hugo Ledoux, Sisi Zlatanova & Arzu Çöltekin (2015). Applications of 3D City Models: State of the Art Review. ISPRS Int. J. Geo-Inf. Vol. 4, 4, pg. 2842-2889. https://doi.org/10.3390/ijgi404284
[^8]: Gerhard Hirschfeld (2009). Historie - Die Ohlendorff'sche Villa. https://ohlendorffsche.de/historie/ [Zugriff: 19.03.2025]
[^10]: o.A. (o.J). Umbau und Sanierung - Die Ohlendorff'sche Villa. https://ohlendorffsche.de/umbau-und-sanierung/ [Zugriff: 19.03.2025]
[^11]: Thitiwudh Uasmith, Tantikorn Pukkaman & Peeraya Sripian (2017). Low-poly image stylization. Journal for Geometry and Graphics, Vol. 21, 1, pg. 131-139. https://shibaura.elsevierpure.com/en/publications/low-poly-image-stylization
[^12]: Verändert und erweitert: Alex Klippel, Mahda M. Bagher & Jan Oliver Wallgrün (o.J). 3D and VR Application Building Workflows. https://www.e-education.psu.edu/geogvr/node/559 [Zugriff: 19.03.2025]
[^13]: Freie und Hansestadt Hamburg, Behörde für Umwelt und Energie (2024). Daten: Arten- und Biotopschutz - AuBS (ehem. APRO). https://registry.gdi-de.org/id/de.hh/B8F6865A-1790-4B9D-987E-AF97B88E84D3 [Zugriff: 12.12.2024]
[^14]: Freie und Hansestadt Hamburg, Behörde für Verkehr und Mobilitätswende (2023). Daten: Feinkartierung Straße Hamburg. https://registry.gdi-de.org/id/de.hh/ad7e3cb6-9a9e-4044-81b1-4c1f8d974c2f [Zugriff: 08.12.2024]
[^15]: Freie und Hansestadt Hamburg, Landesbetrieb Geoinformation und Vermessung (LGV) (2024). Daten: 3D-Gebäudemodell LoD2-DE Hamburg. https://registry.gdi-de.org/id/de.hh/948321ba-e9b2-4290-88c3-8dda2912defa [Zugriff: 01.12.2024]
[^16]: Asmaa Saeed Alqahtani, Lamya Foaud Daghestani & Lamiaa Fattouh Ibrahim (2017). Environments and system types of virtual reality technology in STEM: a survey. International Journal of Advanced Computer Science and Applications Vol. 8, 6. 10.14569/IJACSA.2017.080610. 
[^17]: HTC Corporation (o.J.). VIVE Product Specification. https://www.vive.com/eu/product/vive/ [Zugriff: 19.03.2025]
[^18]: Christoph Anthes, Rubén Jesús García-Hernández, Markus Wiedemann & Dieter Kranzlmüller (2016). State of the art of virtual reality technology. IEEE Aerospace Conference, Big Sky, MT, USA. pg. 1-19. 10.1109/AERO.2016.7500674.
[^19]: Übersetzt aus: Sara Qamar, Zahid Anwar & Mehreen Afzal (2023). A systematic threat analysis and defense strategies for the metaverse and extended reality systems. Computers & Security Vol. 128, 103127.
[^22]: Menno-Jan Kraak, Ferjan Ormeling (2020). Cartography: Visualization of spatial data. Ed.4. Routledge.
[^23]: Markus Jobst & Timothy Germanchis (2007). The paradigm of 3D cartography. Proceedings of the 23rd International Cartographic Conference (ICC). 10.1007/978-3-540-36651-5_15. 
[^25]: Manfred Ehlers & Jochen Schiewe (2012). Geoinformatik. Raumforschung und Raumordnung. WBG Academic. Darmstadt. 10.1007/s13147-012-0183-x. 
