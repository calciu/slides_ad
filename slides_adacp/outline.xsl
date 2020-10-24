<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version='1.0'>

<xsl:template match="/">
 <html>
  <body>
<a href="slides.xml" target="_top"><img src="./images/mc_slides/slides.gif" border="0"/></a><br/>
   <xsl:apply-templates/>
  </body>
 </html>
</xsl:template>

<xsl:template match="slides">
  <h3><xsl:value-of select="title"/></h3>
  <ul>
    <xsl:apply-templates/>
  </ul>
</xsl:template>
<xsl:template match="section">
  <xsl:variable name="section_position">
   <xsl:value-of select="count(preceding-sibling::section)+1"/>
  </xsl:variable>
  <li><a href="slides.xml?section={$section_position}"  target="slides"><xsl:value-of select="title"/></a></li>
  <ul>
    <xsl:apply-templates/>
  </ul>
</xsl:template>

<xsl:template match="slide">
  <xsl:variable name="section_position">
   <xsl:value-of select="count(preceding::section)+1"/>
  </xsl:variable>
  <xsl:variable name="slide_position">
   <xsl:value-of select="count(preceding-sibling::slide)+1"/>
  </xsl:variable>
  <li><a href="slides.xml?section={$section_position}&amp;slide={$slide_position}" target="slides"><xsl:value-of select="title"/></a></li>
</xsl:template>



<xsl:template match="*|@*|comment()|processing-instruction()|text()"/>

</xsl:stylesheet>
