using System;
using System.Collections.Generic;

namespace Vehicle_Configurator.DbRepos;

public partial class User
{
    public int Id { get; set; }

    public string? Address { get; set; }

    public string? AuthCell { get; set; }

    public string? AuthTel { get; set; }

    public string? CompName { get; set; }

    public string? CompStNo { get; set; }

    public string? Designation { get; set; }

    public string? Emailid { get; set; }

    public string? Holding { get; set; }

    public string? NameAuthPerson { get; set; }

    public string? Pan { get; set; }

    public string? Password { get; set; }

    public string? Telephone { get; set; }

    public string? Username { get; set; }

    public string? VatNo { get; set; }
}
