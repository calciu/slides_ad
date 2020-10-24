<?xml version="1.0"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="slide">
   <html>
    <head>
     <title><xsl:value-of select="title"/></title>
     <link rel="stylesheet" type="text/css" href="styles/apachecon.css" title="Style"/>
    </head>
    <body bgcolor="white">
     <table width="100%">
      <tr>
       <td BGCOLOR="#FFFF00">
        <table width="100%">
         <tr>
          <td>
           <xsl:apply-templates select="view"/>
          </td>
          <td width="100%" align="center"><img src="./images/mc_slides/scomelec.gif" border="0"/></td>
          <td>
           <xsl:apply-templates select="navigation"/>
          </td>
         </tr>
        </table>
       </td>
      </tr>
      <tr>
       <td>
        <div id="main">
         <xsl:apply-templates select="layout"/>
        </div>
       </td>
      </tr>
      <tr>
       <td BGCOLOR="#FFFF00">
        <table width="100%">
         <tr>
          <td align="center">
           <xsl:apply-templates select="footer"/>
          </td>
         </tr>
        </table>
       </td>
      </tr>
     </table>
    </body>
   </html>
  </xsl:template>

  <xsl:template match="navigation">
   <table>
    <tr>
     <td>
      <xsl:if test="previous">
       <a href="{previous/@href}"><img src="./images/mc_slides/PreviousArrow.gif" border="3"/></a>
      </xsl:if>
      <xsl:if test="not(previous)">
       <img src="./images/mc_slides/PreviousArrow.gif" border="3"/>
      </xsl:if>
     </td>
     <td>
      <xsl:if test="previous-section">
       <a href="{previous-section/@href}"><img src="./images/mc_slides/PreviousArrow.gif" border="0"/></a>
      </xsl:if>
      <xsl:if test="not(previous-section)">
       <img src="./images/mc_slides/PreviousArrow.gif" border="0"/>
      </xsl:if>
     </td>
     <td>
      <xsl:if test="home">
       <a href="{home/@href}"><img src="./images/mc_slides/WayUpArrow.gif" border="0"/></a>
      </xsl:if>
      <xsl:if test="not(home)">
       <img src="./images/mc_slides/WayUpArrow.gif" border="0"/>
      </xsl:if>
     </td>
     <td>
      <xsl:if test="next-section">
       <a href="{next-section/@href}"><img src="./images/mc_slides/NextArrow.gif" border="0"/></a>
      </xsl:if>
      <xsl:if test="not(next-section)">
       <img src="./images/mc_slides/NextArrow.gif" border="0"/>
      </xsl:if>
     </td>
     <td>
      <xsl:if test="next">
       <a href="{next/@href}"><img src="./images/mc_slides/NextArrow.gif" border="3"/></a>
      </xsl:if>
      <xsl:if test="not(next)">
       <img src="./images/mc_slides/NextArrow.gif" border="3"/>
      </xsl:if>
     </td>
    </tr>
   </table>
  </xsl:template>

  <xsl:template match="view">
   <table>
    <tr>
     <td>
       <a href="{outline/@href}" target="_top"><img src="./images/mc_slides/outline.gif" border="0"/></a>
     </td>
     <td>
       <a href="{frame-outline/@href}" target="_top"><img src="./images/mc_slides/frame_outline.gif" border="0"/></a>
     </td>
     <td>
       <a href="{slides/@href}" target="_top"><img src="./images/mc_slides/slides.gif" border="0"/></a>
     </td>
     <!--
     <td>
       <a href="{structure-html/@href}" target="_top"><img src="./images/mc_slides/structure.gif" border="0"/></a>
     </td>
     <td>
       <a href="{web/@href}" target="_top"><img src="./images/mc_slides/web.gif" border="0"/></a>
     </td>
     <td>
       <a href="{structure-slides/@href}" target="_top"><img src="./images/mc_slides/structure.gif" border="0"/></a>
     </td>
     <td>
       <a href="{pdf/@href}" target="_top"><img src="./images/mc_slides/pdf.gif" border="0"/></a>
     </td>
     -->
    </tr>
   </table>
  </xsl:template>


  <xsl:template match="layout">
   <xsl:apply-templates/>
  </xsl:template>

  <xsl:template match="footer">
   <xsl:apply-templates/>
  </xsl:template>


  <xsl:template match="event|person|overview">
   <xsl:apply-templates/>
  </xsl:template>

  <xsl:template match="p|ol|ul|li|em|strong|br|tr|td|i|sub|sup">
   <xsl:copy>
    <xsl:apply-templates/>
   </xsl:copy>
  </xsl:template>

  <xsl:template match="table">
    <table width="{@width}" align="{@align}"><xsl:apply-templates/></table>
  </xsl:template>
  <xsl:template match="td/p">
    <xsl:apply-templates/>
  </xsl:template>

  <xsl:template match="fork">
   <a href="{@uri}" target="_blank">
    <xsl:apply-templates/>
   </a>
  </xsl:template>

  <xsl:template match="link">
   <a href="{@uri}">
    <xsl:apply-templates/>
   </a>
  </xsl:template>

  <xsl:template match="title">
   <h1>
    <xsl:apply-templates/>
   </h1>
  </xsl:template>

  <xsl:template match="subtitle">
   <h3>
    <xsl:text> [</xsl:text>
    <xsl:apply-templates/>
    <xsl:text>]</xsl:text>
   </h3>
  </xsl:template>
  
  <xsl:template match="slide-titles">
   <OL>
     <xsl:apply-templates/>
   </OL>
  </xsl:template>
  <xsl:template match="slide-title">
   <li><a href="{@href}">
     <xsl:apply-templates/>
   </a></li>
  </xsl:template>

  <xsl:template match="quote">
   <p class="quote">
    <xsl:apply-templates/>
   </p>
  </xsl:template>

  <xsl:template match="source">
   <pre>
    <xsl:apply-templates/>
   </pre>
  </xsl:template>

  <xsl:template match="caption">
    <h5 align="center"><xsl:apply-templates/></h5>
  </xsl:template>

<!-- 
  <xsl:template match="img">
    <xsl:copy-of select="."/>
  </xsl:template>
-->

<!-- as the slides-figures stylesheet doesn't work very well 
     figure and imgspan tags are temporarily abandonned
-->

 

  <xsl:template match="figure">
   <p class="figure" align="center">
    <img src="{@src}"/>
   </p>
  </xsl:template>

 <!-- 
 <xsl:template match="p/figure">
    <img src="{@src}"/>
  </xsl:template>
-->

  <xsl:template match="cfigure">
   <table align="center">
    <tr><td>
    <img src="{@src}"/>
    </td></tr>
    <tr><td>
    <xsl:apply-templates/>
    </td></tr>
   </table>
  </xsl:template>

  <xsl:template match="imgspan">
    <img src="{@src}"/>
  </xsl:template>
  
</xsl:stylesheet>
