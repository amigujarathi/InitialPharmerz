/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pharmerz.server.domain.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.UniqueConstraint;

/**
 *
 * @author ankur
 */
@Entity
@Table(name = "QUOTATIONS", uniqueConstraints = {
    @UniqueConstraint(columnNames = {"ENQUIRY_ID"})})
@NamedQueries({
    @NamedQuery(name = "Quotation.findAll", query = "SELECT q FROM Quotation q")})
public class Quotation extends Domain implements Serializable {

    private static final long serialVersionUID = 1L;
    @Basic(optional = false)
    @Column(name = "RATE", nullable = false)
    private BigDecimal rate;
    @Basic(optional = false)
    @Column(name = "QUANTITY", nullable = false)
    private BigDecimal quantity;
    @Column(name = "PAYMENT_TERMS")
    private String paymentTerms;
    @Column(name = "LEAD_TIME")
    private String leadTime;
    @Basic(optional = false)
    @Column(name = "TAX", nullable = false)
    private String tax;
    @Basic(optional = false)
    @Column(name = "TAX_RATE", nullable = false)
    private BigDecimal taxRate;
    @Column(name = "OFFER_VALIDITY")
    @Temporal(TemporalType.TIMESTAMP)
    private Date offerValidity;
    @Column(name = "MESSAGE")
    private String message;
    @OneToOne(cascade = CascadeType.ALL, mappedBy = "quotation")
    private PurchaseOrder purchaseOrder;
    @JoinColumn(name = "ENQUIRY_ID", referencedColumnName = "ID", nullable = false)
    @OneToOne(optional = false)
    private Enquiry enquiry;
    @JoinColumn(name = "INCOTERM_ID", referencedColumnName = "ID", nullable = false)
    @ManyToOne(optional = false)
    private Incoterm incoterm;
    @JoinColumn(name = "RECEIVER_ORGANIZATION_ID", referencedColumnName = "ID", nullable = false)
    @ManyToOne(optional = false)
    private Organization receiverOrganization;
    @JoinColumn(name = "SENDER_ORGANIZATION_ID", referencedColumnName = "ID", nullable = false)
    @ManyToOne(optional = false)
    private Organization senderOrganization;
    @JoinColumn(name = "SUPPLIER_ID", referencedColumnName = "ID", nullable = false)
    @ManyToOne(optional = false)
    private Supplier supplier;

    public Quotation() {
    }


    public BigDecimal getRate() {
        return rate;
    }

    public void setRate(BigDecimal rate) {
        this.rate = rate;
    }

    public BigDecimal getQuantity() {
        return quantity;
    }

    public void setQuantity(BigDecimal quantity) {
        this.quantity = quantity;
    }

    public String getPaymentTerms() {
        return paymentTerms;
    }

    public void setPaymentTerms(String paymentTerms) {
        this.paymentTerms = paymentTerms;
    }

    public String getLeadTime() {
        return leadTime;
    }

    public void setLeadTime(String leadTime) {
        this.leadTime = leadTime;
    }

    public String getTax() {
        return tax;
    }

    public void setTax(String tax) {
        this.tax = tax;
    }

    public BigDecimal getTaxRate() {
        return taxRate;
    }

    public void setTaxRate(BigDecimal taxRate) {
        this.taxRate = taxRate;
    }

    public Date getOfferValidity() {
        return offerValidity;
    }

    public void setOfferValidity(Date offerValidity) {
        this.offerValidity = offerValidity;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }


    public PurchaseOrder getPurchaseOrder() {
        return purchaseOrder;
    }

    public void setPurchaseOrder(PurchaseOrder purchaseOrder) {
        this.purchaseOrder = purchaseOrder;
    }

    public Enquiry getEnquiry() {
        return enquiry;
    }

    public void setEnquiry(Enquiry enquiry) {
        this.enquiry = enquiry;
    }

    public Incoterm getIncoterm() {
        return incoterm;
    }

    public void setIncoterm(Incoterm incoterm) {
        this.incoterm = incoterm;
    }


    public Supplier getSupplier() {
        return supplier;
    }

    public void setSupplier(Supplier supplier) {
        this.supplier = supplier;
    }

    public Organization getReceiverOrganization() {
        return receiverOrganization;
    }

    public void setReceiverOrganization(Organization receiverOrganization) {
        this.receiverOrganization = receiverOrganization;
    }

    public Organization getSenderOrganization() {
        return senderOrganization;
    }

    public void setSenderOrganization(Organization senderOrganization) {
        this.senderOrganization = senderOrganization;
    }
}
